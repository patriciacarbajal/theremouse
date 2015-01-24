function Theremin(oscillator, gainNode){
	this.pitch;
	this.volume;
	this.oscillator = oscillator;
	this.gainNode = gainNode;
}


Theremin.prototype.update = function(xCoord, yCoord){
	this.updatePitch(xCoord);
	this.updateVolume(yCoord);
	this.updateOscillator();
}

Theremin.prototype.updatePitch = function(xCoord){
	this.pitch = xCoord / window.innerWidth;
}

Theremin.prototype.updateVolume = function(yCoord){
	this.volume = 1 - (yCoord / window.innerHeight);
}


Theremin.prototype.updateOscillator = function(){
	this.oscillator.detune.value =  theremin.pitch * 5000
	this.gainNode.gain.value = this.volume 
}
