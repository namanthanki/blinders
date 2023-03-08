const MatchContainer = () => {
    return (
        <div className="flex justify-between items-center w-80 bg-white p-5 rounded-lg">
            <div className="">
                <div className="rounded-full w-20 h-20 mb-1 bg-gray-600">
                    
                </div>

                <div className="text-center">
                    <span>Team X</span>
                </div>
            </div>
            <div className='flex justify-evenly items-center text-3xl'>
                <div> 
                    <p className='text-center my-2'>VS</p>
                    <div className='flex justify-center gap-2 items-baseline bg-red-300 w-14 h-6 rounded-sm'>
                        <div className='bg-red-500 w-2 h-2 ml-1 rounded-full'></div>
                        <p className='text-sm text-center text-red-600'>Live</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="rounded-full w-20 h-20 mb-1 bg-gray-600">
                    
                </div>
    
                <div className="text-center">
                    <span>Team Y</span>
                </div>
            </div>
        </div>
    );
}

export default MatchContainer;