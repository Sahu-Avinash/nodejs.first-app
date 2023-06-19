// const gfname = "Mrsrandom";
// const gfname1 = "Mrsrandom";
// const gfname2 = "Mrsrandom";
// const gfname3 = "Mrsrandom";

// export default gfname; 
// export {gfname1,gfname3};

// export const generateLovePercent = ()=>
// {
//     return `${Math.floor(Math.random()*100)}%`;
// }
export const generateLovePercent = ()=>
{
    return `${~~(Math.random()*100)}%`; // ~~ work same as Math.floor
}