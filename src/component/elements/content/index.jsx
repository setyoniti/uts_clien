const ContentPage = ({ title, content }) => {
    return (
      <div className="bg-white rounded-lg px-8 py-6 shadow-lg flex flex-col justify-center min-h-[150px]">
        {}
        <div
          className={`text-lg font-semibold text-gray-700 mb-2 ${
            !title ? "invisible" : ""
          }`}
        >
          {title || "Placeholder"}
        </div>
        <div className="text-gray-600 text-base">{content}</div>
      </div>
    );
  };
  
  export default ContentPage;