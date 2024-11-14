import { StaticImageData } from 'next/image';
import arduino from '../public/skills/arduino.svg';
import cpp from '../public/skills/cplusplus.svg';
import css from '../public/skills/css.svg';
import git from '../public/skills/git.svg';
import html from '../public/skills/html.svg';
import javascript from '../public/skills/javascript.svg';
import keras from '../public/skills/keras.svg';
import matlab from '../public/skills/matlab.svg';
import mongodb from '../public/skills/mongodb.svg';
import nextjs from '../public/skills/nextjs.svg';
import numpy from '../public/skills/numpy.svg';
import opencv from '../public/skills/opencv.svg';
import pandas from '../public/skills/pandas.svg';
import python from '../public/skills/python.svg';
import pytorch from '../public/skills/pytorch.svg';
import raspberrypi from '../public/skills/raspberrypi.svg';
import react from '../public/skills/react.svg';
import scikitlearn from '../public/skills/scikitlearn.svg';
import tailwind from '../public/skills/tailwind.svg';
import tensorflow from '../public/skills/tensorflow.svg';
import typescript from '../public/skills/typescript.svg';


export const skillsImage = (skill: string): StaticImageData => {
    const skillID = skill.toLowerCase();

    switch (skillID) {
        case 'git':
            return git;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'react':
            return react;
        case 'nextjs':
            return nextjs;
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
        case 'numpy':
            return numpy;
        case 'pandas':
            return pandas;
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
        default:
            throw new Error(`Skill image not found for: ${skill}`);
    }
};
