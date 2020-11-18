import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data");

export function getAllEvents() {
    const eventsDirectoy = path.join(dataDirectory, "events.json");
    const rawdata = fs.readFileSync(eventsDirectoy);
    const events = JSON.parse(rawdata);

    return events;
}