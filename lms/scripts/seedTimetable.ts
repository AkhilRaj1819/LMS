import clientPromise from "@/lib/db";

const timetableData = {
  id: "main",
  schedule: {
    MON: [
      { time: "09:30 - 10:30", subject: "Integrated Session", description: "" },
      { time: "10:30 - 11:30", subject: "", description: "" },
      { time: "11:30 - 12:30", subject: "ES", description: "" },
      { time: "01:15 - 02:15", subject: "NSS", description: "" },
      { time: "02:15 - 03:15", subject: "OS", description: "" },
      { time: "03:15 - 04:15", subject: "Free session", description: "" }
    ],
    TUE: [
      { time: "09:30 - 10:30", subject: "", description: "" },
      { time: "10:30 - 11:30", subject: "LS: PPHC", description: "" },
      { time: "11:30 - 12:30", subject: "ES", description: "" },
      { time: "01:15 - 02:15", subject: "LS: PPHC", description: "" },
      { time: "02:15 - 03:15", subject: "Practice Session (DS)", description: "" },
      { time: "03:15 - 04:15", subject: "Practice Session (DS)", description: "" }
    ],
    WED: [
      { time: "09:30 - 10:30", subject: "DS", description: "" },
      { time: "10:30 - 11:30", subject: "DS", description: "" },
      { time: "11:30 - 12:30", subject: "NSS", description: "" },
      { time: "01:15 - 02:15", subject: "NSS", description: "" },
      { time: "02:15 - 03:15", subject: "Integrated Session", description: "" },
      { time: "03:15 - 04:15", subject: "Integrated Session", description: "" }
    ],
    THU: [
      { time: "09:30 - 10:30", subject: "LS: PPHC", description: "" },
      { time: "10:30 - 11:30", subject: "FLAT", description: "" },
      { time: "11:30 - 12:30", subject: "DS", description: "" },
      { time: "01:15 - 02:15", subject: "FLAT", description: "" },
      { time: "02:15 - 03:15", subject: "Practice Session (DS)", description: "" },
      { time: "03:15 - 04:15", subject: "Practice Session (DS)", description: "" }
    ],
    FRI: [
      { time: "09:30 - 10:30", subject: "Practice Session (DS)", description: "" },
      { time: "10:30 - 11:30", subject: "Practice Session (DS)", description: "" },
      { time: "11:30 - 12:30", subject: "FLAT", description: "" },
      { time: "01:15 - 02:15", subject: "LS: PPHC", description: "" },
      { time: "02:15 - 03:15", subject: "OS", description: "" },
      { time: "03:15 - 04:15", subject: "OS", description: "" }
    ]
  }
};

async function seedTimetable() {
  const client = await clientPromise;
  const db = client.db();
  
  await db.collection("timetable").updateOne(
    { id: "main" },
    { $set: timetableData },
    { upsert: true }
  );
  console.log("Timetable seeded successfully");
}

seedTimetable();
