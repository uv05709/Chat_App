import User from "../models/user.model.js"

export async function getUsersForSidebar(req,res) {
    try {
        const loggedInUser = req.user._id
       const filteredUsers = await User.find({_id: {$ne : loggedInUser}} ).select("-clerkId" )
       res.status(200).json(filteredUsers)
    } catch (error) {
        console.error("error in Getuserfromsidebar: ", error.message)
        res.status(500).json({message:"Internal server error"})
    }
}