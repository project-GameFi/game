import user from "../../models/user";
import "../../../mongodb";

export default async function handler(req, res) {
    try {
        const person = new user({
            name: "gamer2",
        });
        await person.save();

        res.status(200).json({ done: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

