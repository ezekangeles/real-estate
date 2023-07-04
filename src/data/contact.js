import {MdCall} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {BsCameraVideoFill, BsFillChatDotsFill} from 'react-icons/bs'

export const contact = [{
    title: 'Call',
    descrition: '0912-3456-789',
    icon: <MdCall />,
    button: 'Call Now'
},{
    title: 'Chat',
    descrition: '0912-3456-789',
    icon: <BsFillChatDotsFill />,
    button: 'Chat Now'
},{
    title: 'Video Call',
    descrition: '0912-3456-789',
    icon: <BsCameraVideoFill />,
    button: 'Video Call Now'
},{
    title: 'Message',
    descrition: '0912-3456-789',
    icon: <AiFillMessage />,
    button: 'Message Now'
}]