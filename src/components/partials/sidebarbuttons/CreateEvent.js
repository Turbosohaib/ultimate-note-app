export function CreateEvent({ newEventPopUp, setNewEventPopUp }) {
  return (
    <div
      className={`z-30 transition-all duration-300 ${newEventPopUp ? "opacity-100" : "opacity-0 invisible"} fixed inset-0 flex items-center justify-center`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div
        className={`z-40 p-4 transition-all duration-500 bg-white rounded-lg ${newEventPopUp ? "text-lg" : "text-[0px]"}`}
      >
        {/* نور پہ سہ کی گوتی ما وخا */}
        {/*👇 اسی ڈیو میں کام کرے  */}
        <div>
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setNewEventPopUp(!newEventPopUp)}
              className="px-8 py-2.5 cursor-pointer hover:bg-gray-200 rounded-md border-2 border-solid border-gray-300"
            >
              Cancel
            </div>
            <div className="px-4 cursor-not-allowed font-semibold text-white py-2.5 rounded-md border-2 border-solid border-blue-500 bg-blue-500">
              Create event
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
