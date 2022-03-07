import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './conversation.css'

const Conversation = ({ conversation, currentUser }) => {
    const [user, setUser] = useState(null)

    //SE PIDEN LOS DATOS DEL USUARIO CON EL QUE ESTA RELAZIONADO LA CONVERSACION Y SE LO CARGA EN EL ESTADO 
    //PARA HACER EL PEDIDO DE TODOS LOS MENSAJES CON ESE USUARIO
    useEffect(() => {
        const friendId = conversation.members.find(m => m !== currentUser._id)

        const getUser = async () => {
            try {
                const res = await axios.get(`https://db-chat-test-h71i3032o-neriheredia.vercel.app/api/auth?userId=${friendId}`)
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
    }, [currentUser, conversation])

    return (
        <div className='conversation' >
            <img
                className='conversationImg'
                src={user?.picture || "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                alt=""
            />
            <span className='conversationName'>{user?.username}</span>
        </div>
    )
}

export default Conversation