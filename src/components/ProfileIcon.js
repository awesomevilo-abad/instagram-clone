import "../styles/profileIcon.scss";

function ProfileIcon(props){

    const {iconSize, storyBorder, image} = props;

    function getRandomInt (min,max){
        min = Math.ceil(min)
        max = Math.ceil(max)
        return Math.floor(Math.random() * (max-min + 1))+ min;
    }

    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${getRandomInt(0,70)}`

    return <div className={storyBorder ? "storyBorder":""}>
        <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile"/>
    </div>
}

export default ProfileIcon;

// https://www.youtube.com/watch?v=6sFTbTAVn5M
// 29:36