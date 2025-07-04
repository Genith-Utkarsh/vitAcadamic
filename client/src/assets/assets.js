
import image1 from "./maths-realistic-chalkboard-background_23-2148159115.avif"
import image2 from "./New-Project-2-3.webp"
import image3 from "./images3.png"
import image4 from "./images4.jpg"
import image5 from "./images5.jpg"
import image6 from "./images6.0.jpg"
import image7 from "./imges7.png"
import imgae8 from "./PROJE1.webp"
import image9 from "./project2.png"
import image10 from "./python.jpg"
import data from "./data.png"
import aem from "./yourself-2.png"
import amepdf from "./AME-Topic.pdf"
export default {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    imgae8,
    image9,
    image10,
    data,
    aem,amepdf
    
}
export const lectureData = [
  {
    ModuleName: "module1",
    subjects: [
      {
        id:1,
        name: "Math-1",
        text: "LINEAR ALGEBRA AND DIFFERENTIAL EQUATIONS",
        image: image1,
      },
      {
        id:2,
        name: "COOA",
        text: "COMPUTER ORGANIZATION AND ARCHITECTURE",
        image: image2, // Replace with real image
      },
      {
        id:3,
        name: "C",
        text: "PROBLEM SOLVING & PROGRAMMING",
        image: image3,
      },
      {
        id:4,
        name: "Web Development",
        text: "Web Development",
        image: image4,
      },
      {
        id:5,
        name: "ASEP-1",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-1",
        image: imgae8,
      },
      {
        id:7,
        name: "RAAD-1",
        text: "REASONING & APTITUDE DEVELOPMENT - 1",
        image:image7,
      },
    ],
  },
  {
    ModuleName: "module2",
    subjects: [
      {
        id:1,
        name: "Math-2",
        text: "CALCULUS AND STATISTICS",
        image: image1,
      },
      {
        id:2,
        name: "PYTHON",
        text: "PYTHON FOR ENGINEERS",
        image: image10, // Replace with real image
      },
      {
        id:3,
        name: "DATA ANALYSIS",
        text: "DATA ANALYSIS",
        image: data,
      },
      {
        id:4,
        name: "AEM",
        text: "APPLIED ELECTROMECHANICS",
        image:aem
,
      },
      {
        id:5,
        name: "ASEP-2",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-2",
        image: image9
        ,
      },
      {
        id:7,
        name: "RAAD-2",
        text: "REASONING & APTITUDE DEVELOPMENT - 2",
        image:image7,
      },
    ],
  },
];


export const dummyLectureData = [
  {
    subject: 'MATH-1',
    units: [
      {
        unit: 'Unit 01: SYSTEM OF LINEAR EQUATIONS',
        subtopics: [
          {
            title: 'Revision of matrices, Elementary transformations, Elementary Matrices',
            videoLink: 'https://youtu.be/zAsSkYhDxGM?si=lsZ9ogQ9UaRIdqD5',
            notesLink: 'https://example.com/notes/matrix-concepts.pdf',
          },
          {
            title: 'Rank of matrix: Echelon form, Pivot position, Pivot columns, non-pivot columns',
            videoLink: 'https://youtu.be/qBBhTkIdToY?si=vXpKy-dqhnJhNkZm',
            notesLink: 'https://example.com/notes/matrix-concepts.pdf',
          },
          {
            title: 'Non-Homogeneous System of linear equation and its solution and problem solving',
            videoLink: 'https://youtu.be/B4h6OkQ0ZJ8?si=w0qVfgq2YTadfiC2',
            notesLink: 'https://example.com/notes/matrix-concepts.pdf',
          },
          {
            title: 'Homogeneous System of linear equation and its solution and problem solving',
            videoLink: 'https://youtu.be/gXveJraU7hc?si=jKrascQPQtW82O7q',
            notesLink: 'https://example.com/notes/matrix-concepts.pdf',
          },
          {
            title: 'Gauss-Jordan Elimination Problem solving on all cases',
            videoLink: 'https://youtu.be/iggxjHSQiOI?si=A2BYXzBnYRjHQx1D ',
            notesLink: 'https://example.com/notes/matrix-concepts.pdf',
          },
        ],
      },
      {
        unit: 'Unit 02: VECTOR SPACES',
        subtopics: [
          {
            title: 'Introduction, Definition of Vector Space , Standard Vector Spaces Definition of Subspace ',
            videoLink: 'https://youtu.be/yzuoyA2EJPA?si=0goW3g_RPFVHeOZ_',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Examples on Subspace',
            videoLink: 'https://youtu.be/5LCO26C-ggo?si=GeHPJUnNrJGBBTSA',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Linear combination, Span of a set,Spanning set',
            videoLink: 'https://youtu.be/iF7ya80h1Rs?si=6sCuits_87VqrWEA',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Linear Dependence and Independence of vectors ',
            videoLink: 'https://youtu.be/9WjuLvPT_2A?si=uYUTTqS7FGuagNiX',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Basis & Dimension of a subspace  ',
            videoLink: 'https://youtu.be/pG-IAFOiOw4?si=yzSeoIy63wPaw6Qp',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Fundamental Subspaces',
            videoLink: 'https://youtu.be/URa07AbjZhQ?si=oySt8GFqezicKKFq ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 03:INNER PRODUCT SPACES',
        subtopics: [
          {
            title: 'Inner Product- Definition and Examples, Inner product spaces',
            videoLink: 'https://youtu.be/8M0moiQLanE?si=nWMpnbNPBDln6Hbc',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Norm,Distance, Angle, Projection',
            videoLink: 'https://youtu.be/fpB1GvteuMY?si=xc8UixvbCqdQN04Q',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Orthogonal and Orthonormal vectors, Orthogonal and Orthonormal Set,complete',
            videoLink: 'https://youtu.be/K1vWFx01I2A?si=vQQkU4dfriZSWaXZ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Gram-Schmidt process of orthogonalization',
            videoLink: 'https://youtu.be/UOZjINOGLog?si=M4HuseuWf-jMwEn1',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Orthogonality of Fundamental Subspaces.',
            videoLink: 'https://youtu.be/x6enM9dtOH8?si=ALNXHcO7rQnrB-b5',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Applications to least square fitting to data',
            videoLink: 'https://youtu.be/qGqfYrMpewY?si=OPyrlGQhdwdhxiQP ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 04:LINEAR TRANSFORMA TION',
        subtopics: [
          {
            title: 'Introduction to linear transformations, Matrix representation relative to Standard Basis',
            videoLink: 'https://www.youtube.com/watch?v=cfhw2TC4k0Y',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Kernel, Range of linear transformations',
            videoLink: 'https://youtu.be/ImoKUiapTsQ?si=0fT_hkbHet4Qhg7A',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'One-One-Onto linear transformations',
            videoLink: 'https://youtu.be/oM_BWfZFJOo?si=NVZBrt-u_0H3N8aj',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Rank and Nullity Theorem',
            videoLink: 'https://youtu.be/Kpp2hM4V3x0?si=TFxGjwcdgR-97LnD',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Regular Transformation, Composite linear transformation, Orthogonal Transformation',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Geometric Linear transformations in R2 and R3 ',
            videoLink: 'https://youtu.be/tlyFZCcATrQ?si=TBrUhAuLZwEew4fz',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05: EIGEN VALUES AND EIGEN VECTORS',
        subtopics: [
          {
            title: 'Eigen Values and Eigen Vectors of a matrix, Characteristic Equation,Properties',
            videoLink: 'https://youtu.be/h8sg_XBp6VA?si=MmZ284YNw-0sV-e2',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Examples on Eigen Values and Eigen Vectors',
            videoLink: 'https://youtu.be/R6X6UhXvkbE?si=OO6strxAF7e2EHMm',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Algebraic multiplicity, Eigen Space, Geometric multiplicity',
            videoLink: 'https://youtu.be/jHQUreSbcaU?si=QYoJfYQc6EB4F2jM',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Diagonalization of a matrix',
            videoLink: 'https://youtu.be/IKdqDI_oxxI?si=OanZyQLsNiVwELlV',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Introduction to Quadratic Form',
            videoLink: 'https://youtu.be/tM3TQRRybO0?si=ERjpkq_8hGqQzb5N',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Principal Axes Theorem',
            videoLink: 'https://youtu.be/gii12FE-A44?si=q20xSWzjch34eCrI',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 06: LINEAR DIFFERENTIAL EQUATIONS',
        subtopics: [
          {
            title: 'Exact differential equation, First order linear ODE',
            videoLink: 'https://www.youtube.com/watch?v=cfhw2TC4k0Y',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Higher order Linear ODES',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Homogeneous ODE',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Non homogeneous ODE',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Application of diagonalization (Solution of DE by matrix method)',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'COOA',
    units: [
      {
        unit: 'Unit 01: Basic Architecture concepts and Computer Arithmetic',
        subtopics: [
          {
            title: 'Laws of Motion',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Work, Energy and Power',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 01: Basic Architecture concepts and Computer Arithmetic',
        subtopics: [
          {
            title: 'Computer Organization and Architecture Structure and Function',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Evolution (a brief history) of computers',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	Von Neumann Architecture',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Evolution of Intel processor architecture 4 bits it to 64 bits',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Interconnection Structures',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	Integer Representation Integer Arithmetic 2s Complement arithmetic',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Multiplication Booths Algorithm with hardware implementation',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Division Restoring Algorithm with hardware implementation',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Floating point representation IEEE Standards for Floating point representations',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 02:Processor Architectures',
        subtopics: [
          {
            title: 'RAM Model Instruction Execution Cycle Interpretation of instructions Instruction Pipeline',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Processor Architectures RISC Features CISC Features Comparison of RISC and CISC',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Superscalar Processors and Super pipelined Processor',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 03:Fundamental Concepts and processor organization',
        subtopics: [
          {
            title: 'Fundamental Concepts and processor organization',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Single-bus CPU handles register transfers, memory fetch, and store. ',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Micro-operations carry out small steps in arithmetic, logic, and instruction execution',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Hardwired Control and Micro-programmed Control Microinstructions',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 04:Input and Output System',
        subtopics: [
          {
            title: 'I/O system includes external devices, I/O modules, their functions, and structure.',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	Programmed I/O- overview I/O commands I/O instructions',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Interrupt driven I/O design issues Direct Memory Access',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Drawbacks of programmed&interrupt-driven I/O, DMA functions, I/O channels .',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05:Memory Organization',
        subtopics: [
          {
            title: 'Memory Organization, Need Memory Hierarchy and characteristics, Size, Access time',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Read Cycle time and addresses space, Principle of Locality of Reference',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Main Memory RAM SRAM and DRAM ROM and its Types',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Cache memory: role, organization, address mapping; basics of virtual memory ',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 06:Parallel Processing Paradigms',
        subtopics: [
          {
            title: 'Parallel Processing Paradigms, Parallelism in Uniprocessor system PRAM model',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Evolution of parallel processors Architectural Classification Flynns Classification',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Need and basics of Multicore architecture',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title:       ' Multicore Model Case Study CORE2DUO',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'RAAD-1',
    units: [
      {
        unit: 'Test 1-1_ ASNS RAD 24-25-Sem1_RJ',
        subtopics: [
          {
            title: 'Analogy , Simplification , Number Series',
            videoLink: 'https://www.youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 2-1_ AAD RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Ages , Average and Direction Sense',
            videoLink: 'https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          
        ],
      },
      {
        unit: 'Test 3-1_ RBRR RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Ratio and Proportion , Blood Relation , Ranking',
            videoLink: 'https://www.youtube.com/playlist?list=PL1zxEeUFe9lfDhh_Dewp5xHOnjLatGItQ',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          
        ],
      },
      {
        unit: 'Test 4-1_ PANS RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: ' Percentage , Alphanumeric Series and Number System',
            videoLink: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        
        ],
      },
      {
        unit: 'Test 5-1_ PLHR RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: ' Ratio Partnership , LCM HCF.',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          }
        ],
      },
      {
        unit: 'Test 6-1_ SICI RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Simple Interest , Compound Interest , Calendar',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: 'Test 7-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Profit Loss, Coding Decoding , Clock',
            videoLink: 'https://www.youtube.com/playlist?list=PLmJ0TJrONG1wiLFl4vq_SZmXmjwHY3xPP',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 8-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Time Work , Pipes And Cistern , Seating Arrangemen',
            videoLink: 'https://www.youtube.com/playlist?list=PLzvL3i3l-AUora1MWnG_dje3RM-3pXWML',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 9-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Mensuration , Probability',
            videoLink: 'https://www.youtube.com/playlist?list=PLYA_1SYVpPQy4LD4PA4nwRHVyVZ6S_wCm',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 10-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Time and Distance , Boat and Steam , trains',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 11-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Permutation combination , Data Interpretation, Syllogism',
            videoLink: 'https://www.youtube.com/playlist?list=PL1zxEeUFe9lfDhh_Dewp5xHOnjLatGItQ',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 12-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Verbal Ability',
            videoLink: 'https://www.youtube.com/playlist?list=PLYA_1SYVpPQy4LD4PA4nwRHVyVZ6S_wCm',
            notesLink: 'https://docs.google.com/document/d/1EiUDPY76pxawXT5J38SJKmRC8SEuclyuCbC_S4xImCM/edit?tab=t.0',
          },
        ],
      },
    ],
  },
  {
    subject: 'ASEP-1',
    mainTittle:" New Ideas For Your Asep-projects ",
    units: [
      {
        unit: 'Web devlopement',
        subtopics: [
          {
            title: 'Analogy , Simplification , Number Series',
            videoLink: 'https://www.youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'App devlopement',
        subtopics: [
          {
            title: 'Ages , Average and Direction Sense',
            videoLink: 'https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          
        ],
      },
      {
        unit: 'AI/ML',
        subtopics: [
          {
            title: 'Ratio and Proportion , Blood Relation , Ranking',
            videoLink: 'https://www.youtube.com/playlist?list=PL1zxEeUFe9lfDhh_Dewp5xHOnjLatGItQ',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          
        ],
      },
      {
        unit: 'Data Science',
        subtopics: [
          {
            title: ' Percentage , Alphanumeric Series and Number System',
            videoLink: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        
        ],
      },
      {
        unit: ' Hardware (Arduino)',
        subtopics: [
          {
            title: ' Ratio Partnership , LCM HCF.',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          }
        ],
      },
    ],
  },
  {
    subject: 'c',
    units: [
      {
        unit: 'Fundamentals of C Language and Programming Constructs:',
        subtopics: [
          {
            title: ' Variables, Operators and Input/ Output',
            videoLink: 'https://youtu.be/rQoqCP7LX60?si=TqJWxuISp7IqpeA2',
            notesLink: 'https://drive.google.com/file/d/1h-jkmy-fobkXRBr5XFCZXctneNx9EDtX/view?pli=1',
          },
          {
            title: 'If Else in',
            videoLink: 'https://youtu.be/7PSfRdeY5qE?si=Mzb_mBMX5vOITiaG',
            notesLink: 'https://drive.google.com/file/d/1N1ahGfZc4wKOIysFsJjymBlMtodpuhen/view',
          },
          {
            title: 'Loops ',
            videoLink: 'https://youtu.be/wYvrBXUfFfw?si=nS1RrNG5MdbSt30Y',
            notesLink: 'https://drive.google.com/drive/folders/1-4tUD_2wNBM7QPSyY36Ev9gkcghePTQD',
          },
          {
            title: 'Pattern Printing ',
            videoLink: 'https://youtu.be/clIcH1ALHMw?si=s7bcuym370iDSaUU',
            notesLink: 'https://drive.google.com/file/d/1zGi3n-4wya_7PqKqGj6ZJu4KEcwuNdnY/view',
          },
        ],
      },
      {
        unit: 'Functions & Pointers',
        subtopics: [
          {
            title: 'Functions & Pointers',
            videoLink: 'https://youtu.be/mIY3QVktHU8?si=BFQuasQGMfeRs37P',
            notesLink: 'https://drive.google.com/file/d/1701LzeKDZsxigj9nATmlxcWUpQqHTGkC/view',
          },
          
        ],
      },
      {
        unit: 'Recursion ',
        subtopics: [
          {
            title: 'Recursion ',
            videoLink: 'https://youtu.be/Bd-1YM8taBc?si=3FJaStqYiqLSO45L',
            notesLink: 'https://drive.google.com/file/d/1_RhGohsGEZpgwrnVuvhgNrk2798v49Qq/view',
          },
          
        ],
      },
      {
        unit: 'Arrays ',
        subtopics: [
          {
            title: 'Arrays',
            videoLink: 'https://youtu.be/aWKJ5lRgI3U?si=Fo7TGeP_LilKwn8m',
            notesLink: 'https://pwskills.com/course/C++--Foundation/',
          },
          {
            title: '2D Arrays',
            videoLink: 'https://youtu.be/sEiMDFdbPGo?si=DYr79kuW-3z0qUt8',
            notesLink: 'https://drive.google.com/file/d/1fOwBJtu__0QI-YA0qnrBroBHYjU7izs1/view',
          },
        
        ],
      },
      {
        unit: ' Structures  ',
        subtopics: [
          {
            title: 'Structures  .',
            videoLink: 'https://youtu.be/nDmULDo8D18?si=HjyHOfT54rFy_yqy',
            notesLink: 'https://drive.google.com/file/d/1wMAWNxaDA4Ft3U20smpHUOmr1rL5CNWu/view',
          }
        ],
      },
      {
        unit: ' File Handling ',
        subtopics: [
          {
            title: 'File Handling ',
            videoLink: 'https://youtu.be/4DljBbiC2p4?si=-UOymCbQ-ZsyR9Ox',
            notesLink: 'https://pwskills.com/course/C++--Foundation/',
          }
        ],
      },
      {
        unit: ' Strings ',
        subtopics: [
          {
            title: 'Strings .',
            videoLink: 'https://youtu.be/8qKp63Ox3vQ?si=PdO5w03MC7wpEoAE',
            notesLink: 'https://drive.google.com/file/d/1MjHOQSEOdMZREnmFTKtTrkTyWi_lIYFg/view',
          }
        ],
      },
    ],
  },
  {
    subject: 'Web Development',
    units: [
      {
        unit: 'Unit 01:HTML5.x',
        subtopics: [
          {
            title: 'What is HTML? What is website? Why to learn HTML? History of HTML',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	HTML4 document structure',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	HTML elements:- The Root Element',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Document Metadata Elements (Meta Tags)',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Sections Elements',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Text-Level Semantic Elements(HTML -Basic Formatting Tags)',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Embedded Content Elements (Image iFrame and multimedia Tags)',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Tabular Data Elements',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Grouping Content Elements( Grouping Tags) and  Edit Elements.',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 02: 	CSS3.x',
        subtopics: [
          {
            title: 'What is CSS? Why to learn CSS? Introduction to CSS',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Difference between CSS2 and CSS3 versions',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'CSS3 Syntax',
            videoLink: '	CSS3 Selectors',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	CSS3 Color Background Cursor',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	CSS3 Text Fonts',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	CSS3 List and Tables',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	CSS3 Box Model',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'CSS3 Display Positioning',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'CSS3 Floats and Clear Properties',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 03:JavaScript (Functional) ECMA 2024',
        subtopics: [
          {
            title: 'What is JavaScript?  Why to learn JavaScript? ECMA Script 2024',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Writing first JavaScript Code: "Hello World"',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Declaring Variables in JavaScript',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Data Types',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		Operators',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		Numbers',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		Strings',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		Booleans and advanced operators',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '			Writing Statements',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Conditional Statements using if-else and switch',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Looping constructs: - for and while',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'nested loops; Arrays',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Objects and functions',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Array of Objects',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Math Objects',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	String Objects',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		Bugs and Errors',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Try and Catch block;',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 04:	JavaScript (Object Oriented) ECMA 2024',
        subtopics: [
          {
            title: 'Object oriented programming',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	Classes',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Constructors',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Inheritance',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		De-structuring arrays and objects',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	For of loops and objects',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Spread and Rest Operators',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'JavaScript modules',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	JavaScript DOM',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		DOM Manipulations',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	JavaScript Interactivity',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	JavaScript Selectors',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'JavaScript Object Notation(JSON)',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05:	JQuery 3.7.x',
        subtopics: [
          {
            title: 'What is JQuery?  Why to learn JQuery?  Introduction to JQuery',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Loading JQuery',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'selecting elements',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'changing styles',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'creating elements',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'appending elements',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'removing elements',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'handling events',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 06:Bootstrap 4 and 5.x',
        subtopics: [
          {
            title: 'What is Bootstrap? Why to learn Bootstrap? What is Responsive Web Design? Mobile first approach',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Containers:- Fixed and Fluid',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Responsive Containers',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Grid System',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '		Text Typography',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Text Colors',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Contextual and background colors',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Tables',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Image',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Alerts',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
];
export const dummypyqsubject = [
  {
    ModuleName: "module1",
    subjects: [
      {
        id:1,
        name: "Math",
        text: "LINEAR ALGEBRA AND DIFFERENTIAL EQUATIONS",
        image: image1,
      },
      {
        id:2,
        name: "COOA",
        text: "COMPUTER ORGANIZATION AND ARCHITECTURE",
        image: image2, // Replace with real image
      },
      {
        id:3,
        name: "C",
        text: "PROBLEM SOLVING & PROGRAMMING",
        image: image3,
      },
      {
        id:4,
        name: "Web Development",
        text: "Web Development",
        image: image4,
      },
      {
        id:5,
        name: "ASEP-1",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-1",
        image: imgae8,
      },
     
      {
        id:7,
        name: "RAAD-1",
        text: "REASONING & APTITUDE DEVELOPMENT - 1",
        image:image7,
      },
    ],
  },
  {
    ModuleName: "module2",
    subjects: [
      {
        id:1,
        name: "Math",
        text: "CALCULUS AND STATISTICS",
        image: image1,
      },
      {
        id:2,
        name: "PYTHON",
        text: "PYTHON FOR ENGINEERS",
        image: image2, // Replace with real image
      },
       {
        id:2,
        name: "PYTHON",
        text: "PYTHON FOR ENGINEERS",
        image: image10, // Replace with real image
      },
      {
        id:4,
        name: "AEM",
        text: "APPLIED ELECTROMECHANICS",
        image: image4,
      },
      {
        id:5,
        name: "ASEP-2",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-2",
        image: image9,
      },
      {
        id:7,
        name: "RAAD-2",
        text: "REASONING & APTITUDE DEVELOPMENT - 2",
        image:image7,
      },
    ],
  },
];


export const dummyPyqs = [
  {
    subject: 'MATH',
    units: [
      {
        unit: 'Unit 01: Linear Algebra',
        subtopics: [
          {
            title: '2024',
                practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/matrix-concepts.pdf',
          },
          
        ],
      },
      {
        unit: 'Unit 02: Differential Equations',
        subtopics: [
          {
            title: '2024',
           practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: amepdf,
          },
          
        ],
      },
      {
        unit: 'Unit 03:INNER PRODUCT SPACES',
        subtopics: [
          {
            title: '2024',
                practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
         
        ],
      },
      {
        unit: 'Unit 04: LINEAR TRANSFORMA TION',
        subtopics: [
          {
            title: 'First Order DEs',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05: EIGEN VALUES AND EIGEN VECTORS',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          }
        ],
      },
      {
        unit: 'Unit 06: LINEAR DIFFERENTIAL EQUATIONS',
        subtopics: [
          {
            title: '2024',
             practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          }
        ],
      },
    ],
  },
  {
    subject: 'COOA',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'C',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'Web Development',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'COOA',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion:'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
];
