import User from '@/model/User';
import { NextResponse } from 'next/server';
import dbConnect from '@/app/utils/mongodb'

export async function POST(request) {
    await dbConnect();


    const {username,password} =await request.json();

    try {
        const existingUser =await User.find({username})
        if(existingUser){
            return NextResponse.json({message:"User already registered"},{status:401});
        }
        const newUser = new User ({username,password});
        await newUser.save();
        return NextResponse.json({message:"Registration success"},{status:200})
    } catch (error) {
      return NextResponse.json({message:"interna server error"},{status:500});
    }
}