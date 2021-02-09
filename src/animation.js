export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 10
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.4,
        },
    },
};

export const titleAnim = {
    hidden : {y: 200},
    show: {
        y:0,
        transition: {duration: 1, ease:"easeOut"},
    }
}

export const fade = {
    hidden:{opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: "easeOut", duration: 0.75},
    },   
};

export const photoAnimation = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75,
        }
    }
}