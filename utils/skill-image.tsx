import { StaticImageData } from 'next/image';
import arduino from '../public/skills/arduino.svg';
import cpp from '../public/skills/cplusplus.svg';
import git from '../public/skills/git.svg';
import javascript from '../public/skills/javascript.svg';
import keras from '../public/skills/keras.svg';
import matlab from '../public/skills/matlab.svg';
import mongodb from '../public/skills/mongodb.svg';
import nextjs from '../public/skills/nextjs.svg';
import nodejs from '../public/skills/nodejs.svg';
import opencv from '../public/skills/opencv.svg';
import python from '../public/skills/python.svg';
import pytorch from '../public/skills/pytorch.svg';
import raspberrypi from '../public/skills/raspberrypi.svg';
import react from '../public/skills/react.svg';
import scikitlearn from '../public/skills/scikitlearn.svg';
import tailwind from '../public/skills/tailwind.svg';
import tensorflow from '../public/skills/tensorflow.svg';
import typescript from '../public/skills/typescript.svg';
import yolo from '../public/skills/yolo.svg';
import langchain from '../public/skills/langchain.svg';
import ollama from '../public/skills/ollama.svg';
import openai from '../public/skills/openai.svg';
import fastapi from '../public/skills/fastapi.svg';
import docker from '../public/skills/docker.svg';
import postgresql from '../public/skills/postgresql.svg';

export const skillsImage = (skill: string): StaticImageData => {
    const skillID = skill.toLowerCase();

    switch (skillID) {
        case 'git':
            return git;
        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'react':
            return react;
        case 'nextjs':
            return nextjs;
        case 'nodejs':
            return nodejs;
        case 'tailwind':
            return tailwind;
        case 'mongodb':
            return mongodb;
        case 'cpp':
            return cpp;
        case 'python':
            return python;
        case 'matlab':
            return matlab;
        case 'scikitlearn':
            return scikitlearn;
        case 'tensorflow':
            return tensorflow;
        case 'pytorch':
            return pytorch;
        case 'keras':
            return keras;
        case 'opencv':
            return opencv;
        case 'arduino':
            return arduino;
        case 'raspberrypi':
            return raspberrypi;
        case 'yolo':
            return yolo;
        case 'langchain':
            return langchain;
        case 'ollama':
            return ollama;
        case 'openai':
            return openai;
        case 'fastapi':
            return fastapi;
        case 'docker':
            return docker;
        case 'postgresql':
            return postgresql;
        default:
            throw new Error(`Skill image not found for: ${skill}`);
    }
};
