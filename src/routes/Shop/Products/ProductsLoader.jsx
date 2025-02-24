export function ProductsLoader() {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="border-4 mr-4 border-t-transparent border-teal-500 rounded-full w-12 h-12 animate-spin"></div>
      <p className="bg-clip-text bg-gradient-to-b from-teal-300 to-teal-600 font-bold text-2xl text-center text-transparent">
        Loading...
      </p>
    </div>
  );
}
