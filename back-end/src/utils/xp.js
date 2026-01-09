import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function awardXP(userId, delta ,reason,bugId){
    const user = await prisma.user.update({
        where: {id: userId}, 
        data: {
            xp: {increment: delta}
        }
    })

    const newLevel = Math.floor(user.xp/100) +1;

    if(newLevel !== user.level){
        await prisma.user.update({
            where: {id:userId},
            data: {level: newLevel}
        })
    }

    await prisma.xPChangeLog.create({
        data:{
            userId,
            delta,
            reason,
            bugId
        }
    })
}