import ReactPlayer from "react-player"



export default function Video(){


    return(
        <section className="h-96 p-2 w-full my-9">

            <ReactPlayer
            url="https://www.youtube.com/watch?v=7iobxzd_2wY&t=2628s&ab_channel=midulive"
            width="100%"
            height="100%"
            volume = '0.3'
            />
        </section>
    )
}