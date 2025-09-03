import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-1/539098546_2889464841441132_6063103679332615721_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG5GliQdVr_9VQxa3ADGG_rTI60WWiMga9MjrRZaIyBr969-TJzdvihEcW5NN8HsAZIF4fzueNR1pLbuhuBOOwz&_nc_ohc=MbHp35WrYosQ7kNvwFdadz0&_nc_oc=Adl_UgcR2WhhNO2GbcMBBFJSB9nRC6ciTlb1cdg93XYM6WFUqBbSeDDKYAaBnCdwPM4&_nc_zt=24&_nc_ht=scontent.fbkk2-8.fna&_nc_gid=Q3we0KNt5arCMPcSF-598w&oh=00_AfbMEhLsLpy2R7UWIzzSr6d2nvhjIbkAloAzNeUygl4NBg&oe=68BE434B" 
        alt="User Avatar"
        style={{
            borderRadius: '0%',
            alignItems: 'center',
            width: '300px',
            height: '350px',
            border: '2px solid #050505',
            
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#ba36a8ff', margin: '10px 0',fontSize: '40px',}}>
        ศุภโชค หางนาค
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '20px', textAlign: 'center' }}>
        รหัสนักศึกษา : 660710743 <br/>
        อายุ : 20 ปี <br/>
        นักศึกษาชั้นปีที่ 3
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #CCBFBE',
            padding: '50px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '7000px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;