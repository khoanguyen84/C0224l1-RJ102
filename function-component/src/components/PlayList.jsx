import { useState } from "react"
import { FaTimes } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function PlayList() {
    const [playList, setPlayList] = useState([
        "Nắng ấm xa dần",
        "Cơn mưa ngang qua",
        "Em gì ơi"
    ])

    const [music, setMusic] = useState('')

    const handleRemoveSong = (song) => {
        Swal.fire({
            title: "Are you sure to remove this song?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                let newPlayList = playList.filter((item) => item !== song)
                setPlayList(newPlayList)
            }
        })
        // const confirmed = window.confirm('Are you sure to remove this song')
        // if(confirmed) {
        //     let newPlayList = playList.filter((item) => item !== song)
        //     setPlayList(newPlayList)
        // }
    }
    // const handleAddNewSong = () => {
    //     setPlayList([
    //         ...playList,
    //         music
    //     ])
    //     setMusic('')
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        setPlayList([
            ...playList,
            music
        ])
        setMusic('')
        toast.success('The song has been added to playlist', {
            position: 'top-center',
            theme: 'dark'
        })
    }
    // TwoWay Binding
    return (
        <>
            <h1>My Playlist</h1>
            {/* <div className="my-2">
                <input 
                    type="text" 
                    className="form-control"
                    value={music}
                    onInput={(e) => setMusic(e.target.value)}
                />
                <button className="btn btn-primary btn-sm"
                    onClick={handleAddNewSong}
                >
                    <IoMdAddCircle className="me-2"/>
                    Add
                </button>
            </div> */}
            <form className="my-2"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    value={music}
                    onInput={(e) => setMusic(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-sm">
                    <IoMdAddCircle className="me-2" />
                    Add
                </button>
            </form>
            <ul className="list-group">
                {
                    playList?.map((song) => (
                        <li key={song} className="list-group-item d-flex justify-content-between">
                            {song}
                            <FaTimes
                                role="button"
                                className="text-danger"
                                onClick={() => handleRemoveSong(song)}
                            />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}