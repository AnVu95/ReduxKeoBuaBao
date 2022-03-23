import React, { Component } from 'react';
import './GameOanTuTi.css';
import KeoBuaBao from './KeoBuaBao.js';
import KetQua from './KetQua.js';

class GameOanTuTi extends Component {
    render() {
        return (
            <div className='container-fluid text-center gameOanTuTi'>
                <KeoBuaBao/>
                <KetQua/>
            </div>
        );
    }
}

export default GameOanTuTi;