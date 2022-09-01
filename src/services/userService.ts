import axios from "axios";
import * as repositories from "../repositories/userRepository";

export async function battle(firstUser: string, secondUser: string) {
    const firstUserData = await checkUser(firstUser)
    const secondUserData = await checkUser(secondUser)
    await repositories.verifyUser(firstUser)
    await repositories.verifyUser(secondUser)

    //Count GitHub stars
    const firstStars = firstUserData.reduce((acc, user) => acc + user.stargazers_count, 0)
    const secondStars = secondUserData.reduce((acc, user) => acc + user.stargazers_count, 0)

    if (firstStars > secondStars) {
        await repositories.win(firstUser)
        await repositories.loss(secondUser)
        return 'first'

    } else if (firstStars < secondStars) {
        await repositories.win(secondUser)
        await repositories.loss(firstUser)
        return 'second'
    } else {
        await repositories.draw(firstUser)
        await repositories.draw(secondUser)
        return ''
    }
}

async function checkUser (user: string) {
    return await axios.get(`https://api.github.com/users/${user}/repos`).then((response) => response.data).catch((error) => {
        throw { type: 'userError', status: 404, message: `github user: ${user}. Not found` }
    })
}

export async function ranking () {
    return await repositories.ranking()
}