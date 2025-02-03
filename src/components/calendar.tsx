import { useState } from "react";

export default function Calendar() {
  const today = new Date();
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currCalendar, setCurrCalendar] = useState<Date>(today);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const handleDayClick = (day: number) => {
    setSelectedDate(
      new Date(currCalendar.getFullYear(), currCalendar.getMonth(), day),
    );
  };

  const handleDateInput = () => {
    const [month, day, year] = input.split("/").map(Number);
    const newDate = new Date(year, month - 1, day);
    try {
      setCurrCalendar(newDate);
      setSelectedDate(newDate);
    } catch {
      alert("An error occured");
    }
  };

  const handleMonthChange = (input: number) => {
    const newDate = new Date(currCalendar);
    newDate.setMonth(newDate.getMonth() + input);
    setCurrCalendar(newDate);
  };

  return (
    <div>
      <div className="flex gap-2">
        <button onClick={() => handleMonthChange(-1)}>&#60;</button>
        <span className="">
          {currCalendar.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={() => handleMonthChange(1)}>&#62;</button>
      </div>
      <div className="grid gap-2 grid-cols-7 w-48 p-4">
        {[...Array(getDaysInMonth(currCalendar))].map((_, idx) => {
          const day = idx + 1;
          const date = new Date(
            currCalendar.getFullYear(),
            currCalendar.getMonth(),
            day,
          );
          const isSelected =
            selectedDate && date.toDateString() === selectedDate.toDateString();
          const isToday = date.toDateString() === today.toDateString();
          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`${isSelected ? "bg-blue-300" : isToday ? "bg-green-300" : null}`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="MM/DD/YYYY"
        />
        <button onClick={handleDateInput}>Submit</button>
      </div>
    </div>
  );
}
