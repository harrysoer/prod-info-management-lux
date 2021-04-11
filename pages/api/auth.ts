import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
import corsMiddleware from "utils/corsMiddleware";
import token from "utils/token";

// Initializing the cors middleware
const cors = Cors({
  methods: ["POST", "HEAD"],
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await corsMiddleware(req, res, cors);

  switch (req.method) {
    case "POST": {
      const { email, password } = req.body;

      if (email === "user@mail.com" && password === "password") {
        res.statusCode = 200;
        res.json({ token });
      } else {
        res.statusCode = 500;
        res.json({ success: false });
      }

      break;
    }
  }
};
