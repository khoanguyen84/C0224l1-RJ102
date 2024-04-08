import useNow from "../hooks/use-now";

export default function Now(){
    const [hour, minute, second, ampm] = useNow()

    return (
        <button className='btn btn-primary'>
          {`${hour ?? '-'} : ${minute ?? '-'} : ${second ?? '-'} ${ampm ?? '-'}`}
        </button>
    )
}