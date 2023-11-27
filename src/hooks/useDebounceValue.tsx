import { useEffect, useState } from "react"




const useDebounceValue = (input: string = '', time: number = 500) => {
    const [debuncedValue, setDebuncedValue] = useState(input);

    useEffect(() => {

        const timeout = setTimeout(function () {
            setDebuncedValue(input);
        }, time);

        return () => {
            clearTimeout(timeout);
        }

    }, [input])



    return debuncedValue;
}

export default useDebounceValue