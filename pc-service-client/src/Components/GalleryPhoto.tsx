import React, { ReactNode, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegHeart } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

type GalleryPhotoProps = {
    cardText: string;
    cardImage: string;
    likes: string;
    shares: string;
    userName: string;
}
function GalleryPhoto(props: GalleryPhotoProps) {
    const [likes, setLikes] = useState(parseInt(props.likes));
    const [liked, setLiked] = useState(false);
    const [showLikedToast, setShowLikedToast] = useState(false);
    const [showUnlikedToast, setShowUnlikedToast] = useState(false);

    useEffect(() => {
        if (showLikedToast) {
            setTimeout(() => {
                setShowLikedToast(false);
            }, 1000);
        }
    }, [showLikedToast]);

    useEffect(() => {
        if (showUnlikedToast) {
            setTimeout(() => {
                setShowUnlikedToast(false);
            }, 1000);
        }
    }, [showUnlikedToast]);

    const updateLikes = () => {
        if (liked) {
            setLikes(likes - 1);
            setShowUnlikedToast(true);
        } else {
            setLikes(likes + 1);
            setShowLikedToast(true);
        }
        setLiked(!liked);
    }
    return (
        <div className="card border border-black">
            <h5 className="card-header">{props.userName}</h5>
            <img src={props.cardImage} height={290} className="card-img-top" alt="..."></img>
            <div className="card-body text-start">
                <h5>{props.cardText}</h5>
                <button className="button"
                    id="liveToastBtn"
                    onClick={updateLikes}
                >
                    <FaRegHeart size={43} color={liked ? 'pink' : 'black'} />
                </button>
                <span>{likes}</span>
                <IoIosShareAlt size={43} /><span className="ms-1">{props.shares}</span>

            </div>
            {showLikedToast && <div className="toast show">You liked the photo!</div>}
            {showUnlikedToast && <div className="toast show">You unliked the photo!</div>}
        </div>
    )
}
export default GalleryPhoto;