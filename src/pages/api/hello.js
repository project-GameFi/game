export default async function handler(req, res) {
    try {
        res.status(200).json("Hello API");
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
}

