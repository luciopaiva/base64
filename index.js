"use strict";


class Base64DecoderApp {

    constructor (inputId, outputId) {
        this.inputBox = document.getElementById(inputId);
        this.outputBox = document.getElementById(outputId);
        this.lastEncodedInput = null;

        this.inputBox.addEventListener('keyup', () => this.decode());
        this.inputBox.addEventListener('mouseup', () => this.decode());
    }

    decode() {
        let encodedMultiPart = this.inputBox.value;

        if (this.lastEncodedInput === encodedMultiPart) {
            // nothing changed since the last decoding
            return;
        }

        let decoded = [];

        encodedMultiPart
            .replace(/\s+/g, '')
            .replace(/-/g, '+')  // convert base64 url encoding to regular base64 encoding
            .replace(/_/g, '/')  //
            .split(/[^A-Za-z0-9+/=]+/)
            .forEach(encodedPart => {
                let decodedPart = Base64DecoderApp.tryJsonDecode(Base64DecoderApp.tryBase64Decode(encodedPart));
                decoded.push(decodedPart);
            });

        this.lastEncodedInput = encodedMultiPart;
        this.outputBox.value = decoded.join('\n------------------------------\n');
    }

    static tryBase64Decode(inputStr) {
        let result;
        try {
            result = window.atob(inputStr);
        } catch (e) {
            result = inputStr;
        }
        return result;
    }

    static tryJsonDecode(inputStr) {
        let result;
        try {
            result = JSON.stringify(JSON.parse(inputStr), null, 2);
        } catch (e) {
            result = inputStr;
        }
        return result;
    }
}

new Base64DecoderApp('input', 'output');
