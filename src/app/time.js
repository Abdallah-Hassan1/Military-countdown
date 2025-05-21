export default function Time({number, type}){
    return (
      <div className="text-md sm:text-3xl md:text-4xl font-semibold flex flex-col items-center p-3">
        <div className="text-green-300 text-4xl md:text-6xl">{number}</div>
        <div className="uppercase font-bold text-white">{type}</div>
      </div>
    );
}