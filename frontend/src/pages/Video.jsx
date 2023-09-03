import React, { Component } from 'react';


export default function Video() {
    const APP_ID = "fa45b0cac19449d5bac78c0b8f383c09"
    const TOKEN = "ca59b9affe1247789a4e24a15fc367e6"
    const CHANNEL = "YOUR CHANNEL NAME"
    
    const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})
    
    let localTracks = []
    let remoteUsers = {}
    
    let joinAndDisplayLocalStream = async () => {
    
        client.on('user-published', handleUserJoined)
        
        client.on('user-left', handleUserLeft)
        
        let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)
    
        localTracks = await AgoraRTC.createMicrophoneAndCameraTracks() 
    
        let player = `<div class="video-container" id="user-container-${UID}">
                            <div class="video-player" id="user-${UID}"></div>
                      </div>`
        document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
    
        localTracks[1].play(`user-${UID}`)
        
        await client.publish([localTracks[0], localTracks[1]])
    }
    
    let joinStream = async () => {
        await joinAndDisplayLocalStream()
        document.getElementById('join-btn').style.display = 'none'
        document.getElementById('stream-controls').style.display = 'flex'
    }
    
    let handleUserJoined = async (user, mediaType) => {
        remoteUsers[user.uid] = user 
        await client.subscribe(user, mediaType)
    
        if (mediaType === 'video'){
            let player = document.getElementById(`user-container-${user.uid}`)
            if (player != null){
                player.remove()
            }
    
            player = `<div class="video-container" id="user-container-${user.uid}">
                            <div class="video-player" id="user-${user.uid}"></div> 
                     </div>`
            document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
    
            user.videoTrack.play(`user-${user.uid}`)
        }
    
        if (mediaType === 'audio'){
            user.audioTrack.play()
        }
    }
    
    let handleUserLeft = async (user) => {
        delete remoteUsers[user.uid]
        document.getElementById(`user-container-${user.uid}`).remove()
    }
    
    let leaveAndRemoveLocalStream = async () => {
        for(let i = 0; localTracks.length > i; i++){
            localTracks[i].stop()
            localTracks[i].close()
        }
    
        await client.leave()
        document.getElementById('join-btn').style.display = 'block'
        document.getElementById('stream-controls').style.display = 'none'
        document.getElementById('video-streams').innerHTML = ''
    }
    
    let toggleMic = async (e) => {
        if (localTracks[0].muted){
            await localTracks[0].setMuted(false)
            e.target.innerText = 'Mic on'
            e.target.style.backgroundColor = 'cadetblue'
        }else{
            await localTracks[0].setMuted(true)
            e.target.innerText = 'Mic off'
            e.target.style.backgroundColor = '#EE4B2B'
        }
    }
    
    let toggleCamera = async (e) => {
        if(localTracks[1].muted){
            await localTracks[1].setMuted(false)
            e.target.innerText = 'Camera on'
            e.target.style.backgroundColor = 'cadetblue'
        }else{
            await localTracks[1].setMuted(true)
            e.target.innerText = 'Camera off'
            e.target.style.backgroundColor = '#EE4B2B'
        }
    }
    
  
    return (
      <div>
        <script src="https://download.agora.io/sdk/release/AgoraRTC_N.js"></script>
        <button id="join-btn">Join Stream</button>

        <div id="stream-wrapper">
          <div id="video-streams"></div>

          <div id="stream-controls">
            <button id="leave-btn">Leave Stream</button>
            <button id="mic-btn">Mic On</button>
            <button id="camera-btn">Camera on</button>
          </div>
        </div>
      </div>
    );
  
}

