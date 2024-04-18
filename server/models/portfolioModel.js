const mongoose = require('mongoose')

// intro Schema
const introSchema = new mongoose.Schema({
    logo:{
        type: String,
        required: true
    },
    welcomeText: {
        type: String,
        required: true
    }, 
    firstName: {
        type: String,
        required: true,
    }, 
    lastName: {
        type: String,
        required: true,
    }, 
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

// about schema
const aboutSchema = new mongoose.Schema({
    lottieUrl: {
        type: String,
        required: true
    }, 
    description1: {
        type: String,
        required: true,
    }, 
    description2: {
        type: String,
        required: true,
    }, 
    skills: {
        type: Array,
        required: true
    }
})

// Experience Schema
const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    period: {
        type: String,
        required: true,
    }, 
    company: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    }
})

// Project Schema
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: true,
    }, 
    link: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    }
})

// Courses Schema
const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: true,
    }, 
    link: {
        type: String,
        required: true
    }
})

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String, 
        required: true
    },
    age: {
        type: String, 
        required: true
    },
    gender: {
        type: String,
        required: true,
    }, 
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

// Socials Schema
const socialsSchema = new mongoose.Schema({
    linkedin: {
        type: String,
        required: true
    }, 
    github: {
        type: String, 
        required: true
    },
    twitter: {
        type: String, 
        required: true
    },
    facebook: {
        type: String,
        required: true,
    }, 
    whatsapp: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    }
})

module.exports = {
    Intro: mongoose.model('intro', introSchema),
    About: mongoose.model('about', aboutSchema),
    Experience: mongoose.model('experience', experienceSchema),
    Project: mongoose.model('projects', projectSchema),
    Course: mongoose.model('courses', coursesSchema),
    Contact: mongoose.model('contact', contactSchema),
    Socials:mongoose.model('socials', socialsSchema)
}