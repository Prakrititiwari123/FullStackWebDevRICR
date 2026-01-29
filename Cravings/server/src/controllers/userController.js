// import cloudinary from "../config/cloudinary.js";
// import User from "../models/userModel.js";

// export const UserUpdate = async (req, res, next) => {
//   try {
//     //logic here

//     const { fullName, email, mobileNumber } = req.body;
//     const currentUser = req.user;

//     if (!fullName || !email || !mobileNumber) {
//       const error = new Error("All Feilds Required");
//       error.statusCode = 400;
//       return next(error);
//     }

//     console.log("OldData: ", currentUser); //old user data in JSON format
//     //first Way
//     // currentUser.fullName = fullName;
//     // currentUser.email = email;
//     // currentUser.mobileNumber = mobileNumber;
//     // await currentUser.save();

//     // console.log("NewData:", currentUser);

//     //Second Way

//     const updatedUser = await User.findByIdAndUpdate(
//       { _id: currentUser._id },
//       {
//         fullName,
//         email,
//         mobileNumber,
//       },
//       { new: true },
//     );

//     console.log("Updated User: ", updatedUser);
//     res
//       .status(200)
//       .json({ message: "User Updated Sucessfully", data: updatedUser });

//     console.log("Updating the user");
//   } catch (error) {
//     next(error);
//   }
// };

// export const UserChangePhoto = async (req, res, next) => {
//   try {
//     // console.log("body: ", req.body);
//     const currentUser = req.user;
//     const dp = req.file;

//     //console.log("request file: ", req.file);

//     if (!dp) {
//       const error = new Error("Profile Picture required");
//       error.statusCode = 400;
//       return next(error);
//     }

//     console.log("DP:", dp);

//     if (currentUser.photo.publicID) {
//       await cloudinary.uploader.destroy(currentUser.photo.publicID);
//     }

//     const b64 = Buffer.from(dp.buffer).toString("base64");
//     // console.log(b64.slice(0,100));
//     const dataURI = `data:${dp.mimetype};base64,${b64}`;
//     console.log("DataURI", dataURI.slice(0, 100));

//     const result = await cloudinary.uploader.upload(dataURI, {
//       folder: "Cravings/User",
//       width: 500,
//       height: 500,
//       crop: "fill",
//     });

//     console.log("Image Uplaoded successfully: ", result);
//     currentUser.photo.url = result.secure_url;
//     currentUser.photo.publicID = result.public_id;

//     await currentUser.save();

//     res.status(200).json({ message: "Photo Updated", data: currentUser });
//   } catch (error) {
//     next(error);
//   }
// };



import cloudinary from "../config/cloudinary.js";
import User from "../models/userModel.js";

export const UserUpdate = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      mobileNumber,
      gender,
      dob,
      address,
      city,
      pin,
      documents,
      paymentDetails,
      geoLocation,
    } = req.body;

    const currentUser = req.user;

    // Required fields validation
    if (!fullName || !email || !mobileNumber || !city || !pin) {
      const error = new Error("Full Name, Email, Mobile, City, and PIN are required.");
      error.statusCode = 400;
      return next(error);
    }

    // Mobile number validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber.replace(/\D/g, ""))) {
      const error = new Error("Mobile number must be 10 digits.");
      error.statusCode = 400;
      return next(error);
    }

    // PIN validation
    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(pin)) {
      const error = new Error("PIN code must be 6 digits.");
      error.statusCode = 400;
      return next(error);
    }

    // PAN validation (if provided)
    if (documents?.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(documents.pan)) {
      const error = new Error("Invalid PAN format.");
      error.statusCode = 400;
      return next(error);
    }

    // UPI validation (if provided)
    if (
      paymentDetails?.upi &&
      !/^[a-zA-Z0-9._-]+@[a-zA-Z]{3,}$/.test(paymentDetails.upi)
    ) {
      const error = new Error("Invalid UPI format.");
      error.statusCode = 400;
      return next(error);
    }

    // Build update object
    const updateData = {
      fullName,
      email,
      mobileNumber,
      gender: gender || currentUser.gender,
      dob: dob || currentUser.dob,
      address: address || currentUser.address,
      city,
      pin,
      documents: {
        uidai: documents?.uidai || currentUser.documents?.uidai || "",
        pan: documents?.pan || currentUser.documents?.pan || "",
      },
      paymentDetails: {
        upi: paymentDetails?.upi || currentUser.paymentDetails?.upi || "",
        account_number:
          paymentDetails?.account_number ||
          currentUser.paymentDetails?.account_number ||
          "",
        ifs_Code:
          paymentDetails?.ifs_Code ||
          currentUser.paymentDetails?.ifs_Code ||
          "",
      },
      geoLocation: {
        lat: geoLocation?.lat || currentUser.geoLocation?.lat || "N/A",
        lon: geoLocation?.lon || currentUser.geoLocation?.lon || "N/A",
      },
    };

    // Update user in database
    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      updateData,
      { new: true, runValidators: true }
    );

    console.log("Updated User: ", updatedUser);
    res.status(200).json({
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const UserChangePhoto = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const dp = req.file;

    if (!dp) {
      const error = new Error("Profile picture is required.");
      error.statusCode = 400;
      return next(error);
    }

    console.log("DP:", dp);

    // Delete old photo from Cloudinary if exists
    if (currentUser.photo.publicID) {
      await cloudinary.uploader.destroy(currentUser.photo.publicID);
    }

    // Convert buffer to base64
    const b64 = Buffer.from(dp.buffer).toString("base64");
    const dataURI = `data:${dp.mimetype};base64,${b64}`;
    console.log("DataURI", dataURI.slice(0, 100));

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/User",
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log("Image uploaded successfully: ", result);

    // Update user's photo in database
    currentUser.photo.url = result.secure_url;
    currentUser.photo.publicID = result.public_id;
    await currentUser.save();

    res.status(200).json({
      message: "Profile picture updated",
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};