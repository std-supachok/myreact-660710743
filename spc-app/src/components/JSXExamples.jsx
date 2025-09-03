import React from 'react';
import UserCard from './UserCard';
import TodoList from './TodoList';
import TodoList2 from './TodoList2';
import TodoList3 from './TodoList3';
import TodoList4 from './TodoList4';
import TodoList5 from './TodoList5';
import TodoList6 from './TodoList6';
import TodoList7 from './TodoList7';

function JSXExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                fontSize: '80px',
                textAlign: 'center',
                color: '#ba368eff',
                marginBottom: '40px'
            }}>
                My Profile
            </h1>
            
         
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #000000ff',
                borderRadius: '8px',
                backgroundColor: '#ccf3eaff'
            }}>
                {/* <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Component Composition
                </h2> */}
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #ffee00ff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#808127ff', marginBottom: '20px' }}>
                    Monday
                </h2>
                <TodoList />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #ba3692ff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#a0368eff', marginBottom: '20px' }}>
                    Tuesday
                </h2>
                <TodoList2 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Wednesday
                </h2>
                <TodoList3 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #c28b14ff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#b68620ff', marginBottom: '20px' }}>
                    Thursday
                </h2>
                <TodoList4 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36aabaff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#40c4e6ff', marginBottom: '20px' }}>
                    Friday
                </h2>
                <TodoList5 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #9436baff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#9436baff', marginBottom: '20px' }}>
                    Saturday
                </h2>
                <TodoList6 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #ba3636ff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#ba3636ff', marginBottom: '20px' }}>
                    Sunday
                </h2>
                <TodoList7 />
            </section>
        </div>
    );
}

export default JSXExamples;