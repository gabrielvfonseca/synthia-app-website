import {
    X,
    Activity,
    Cloud,
    Star,
    Grid,
    Gauge,
    ArrowUpRight,
    ArrowUp,
    ChevronDown,
    Check,
    Database,
    Laptop2,
    Moon,
    Sun,
    LucideProps,
    type Icon as LucideIcon,
  } from "lucide-react";
  
  export type Icon = LucideIcon;
  
  export const Icons = {
    menu: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" {...props}>
        <path xmlns="http://www.w3.org/2000/svg" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z" fill="currentColor"></path>
      </svg>
    ),
    close: X,
    check: Check,
    activity: Activity,
    laptop: Laptop2,
    moon: Moon,
    sun: Sun,
    gauge: Gauge,
    chevronDown: ChevronDown,
    star: Star,
    grid: Grid,
    database: Database,
    cloud: Cloud,
    arrowUp: ArrowUp,
    arrowUpRight: ArrowUpRight,
    logo: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="36.72" height="31.06" viewBox="0 0 36.72 31.06" {...props}>
        <path fill="currentColor" d="M210.96,15.53,195.43,0,192.6,2.83,189.77,0,174.24,15.53l15.53,15.53,2.83-2.83,2.83,2.83Zm-25.4,0,7.04-7.04,7.04,7.04-7.04,7.04Z" transform="translate(-174.24)"/>
      </svg>
    ),
    logoLarge: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.405 12.583" {...props}>
        <g transform="translate(0.04)">
          <path fill="currentColor" d="M2.317,43.833a.376.376,0,0,0-.086-.253A.68.68,0,0,0,2,43.414a1.949,1.949,0,0,0-.33-.117c-.125-.033-.253-.066-.39-.1a4.719,4.719,0,0,1-.5-.162,1.524,1.524,0,0,1-.419-.24,1.079,1.079,0,0,1-.288-.374,1.278,1.278,0,0,1-.106-.553,1.587,1.587,0,0,1,.143-.7,1.372,1.372,0,0,1,.39-.488,1.664,1.664,0,0,1,.57-.288,2.471,2.471,0,0,1,.687-.094,4.563,4.563,0,0,1,.829.072,4.375,4.375,0,0,1,.7.186v.958c-.109-.036-.224-.07-.345-.1s-.243-.058-.367-.082-.247-.042-.37-.057a2.951,2.951,0,0,0-.348-.023,1.347,1.347,0,0,0-.353.04.72.72,0,0,0-.233.106.4.4,0,0,0-.129.154.432.432,0,0,0-.04.182A.409.409,0,0,0,1.191,42a.619.619,0,0,0,.24.168,2.238,2.238,0,0,0,.322.106l.328.082c.166.04.33.088.5.143a1.549,1.549,0,0,1,.447.236,1.171,1.171,0,0,1,.325.393,1.305,1.305,0,0,1,.126.613,1.55,1.55,0,0,1-.154.71,1.394,1.394,0,0,1-.43.5,1.864,1.864,0,0,1-.661.3,3.441,3.441,0,0,1-.846.1,4.252,4.252,0,0,1-.821-.072,2.735,2.735,0,0,1-.6-.182v-.949a3.792,3.792,0,0,0,.715.2,3.932,3.932,0,0,0,.61.052,2.451,2.451,0,0,0,.407-.032,1.128,1.128,0,0,0,.325-.1.6.6,0,0,0,.216-.176.417.417,0,0,0,.08-.256Z" transform="translate(0 -34.954)"/>
          <path fill="currentColor" d="M29.67,41.2h1.26l.719,1.742q.406.993.576,1.469h.02q.123-.372.527-1.38l.744-1.831h1.275l-3.1,7.118H30.534l1.1-2.576L29.671,41.2Z" transform="translate(-25.768 -35.734)" />
          <path fill="currentColor" d="M74.584,41.089h.02a1.757,1.757,0,0,1,.263-.293,1.855,1.855,0,0,1,.362-.253,2.131,2.131,0,0,1,.45-.176A1.962,1.962,0,0,1,76.2,40.3a2.14,2.14,0,0,1,.508.06,1.569,1.569,0,0,1,.45.186,1.377,1.377,0,0,1,.36.328,1.525,1.525,0,0,1,.245.479,1.508,1.508,0,0,1,.066.334c.012.121.017.26.017.419v3.122H76.672V42.289c0-.129-.005-.24-.015-.333a.937.937,0,0,0-.054-.243.608.608,0,0,0-.271-.328.9.9,0,0,0-.439-.1,1.431,1.431,0,0,0-.658.162,1.7,1.7,0,0,0-.559.47v3.31H73.5V40.418h.972l.109.67Z" transform="translate(-63.784 -34.954)"/>
          <path fill="currentColor" d="M115.053,37.2a2.9,2.9,0,0,1-.474.094,4.221,4.221,0,0,1-.513.034,2.168,2.168,0,0,1-.99-.2,1.123,1.123,0,0,1-.544-.564,1.842,1.842,0,0,1-.114-.715V33.362h-.9V32.4h.9V31.05h1.177V32.4h1.389v.967h-1.389V35.7a.777.777,0,0,0,.085.411.655.655,0,0,0,.59.228,2.586,2.586,0,0,0,.4-.032,3.4,3.4,0,0,0,.379-.082V37.2Z" transform="translate(-96.76 -26.931)"/>
          <path fill="currentColor" d="M146.625,31.987q0,.372-.012.613a4.215,4.215,0,0,1-.042.434h.02a1.955,1.955,0,0,1,.256-.277,1.757,1.757,0,0,1,.333-.24,1.862,1.862,0,0,1,.411-.166,1.9,1.9,0,0,1,.508-.065,2.336,2.336,0,0,1,.464.046,1.725,1.725,0,0,1,.422.146,1.462,1.462,0,0,1,.357.257,1.43,1.43,0,0,1,.271.377,1.665,1.665,0,0,1,.139.427,3.151,3.151,0,0,1,.045.581v3.092h-1.177V34.28a2.714,2.714,0,0,0-.02-.365.836.836,0,0,0-.069-.245.612.612,0,0,0-.3-.308,1.039,1.039,0,0,0-.442-.089,1.344,1.344,0,0,0-.633.163,1.763,1.763,0,0,0-.533.467v3.31H145.45V31.06h1.177v.929Z" transform="translate(-126.188 -26.939)"/>
          <path fill="currentColor" d="M188.17,41.2h1.177v4.809H188.17Z" transform="translate(-163.241 -35.734)" />
          <path fill="currentColor" d="M208.353,44.725h-.02a2.322,2.322,0,0,1-.239.214,2.215,2.215,0,0,1-.317.206,1.858,1.858,0,0,1-.4.157,1.782,1.782,0,0,1-.471.06,1.91,1.91,0,0,1-.641-.106,1.408,1.408,0,0,1-.846-.795,1.614,1.614,0,0,1-.122-.638,1.648,1.648,0,0,1,.142-.7,1.476,1.476,0,0,1,.394-.521,1.743,1.743,0,0,1,.6-.325,2.574,2.574,0,0,1,.779-.111,3.86,3.86,0,0,1,.576.04,4.2,4.2,0,0,1,.462.094v-.194a.927.927,0,0,0-.057-.325.734.734,0,0,0-.183-.277.9.9,0,0,0-.33-.194,1.5,1.5,0,0,0-.5-.072,3.282,3.282,0,0,0-.715.08,5.613,5.613,0,0,0-.775.239v-.918a3.8,3.8,0,0,1,.769-.243,4.427,4.427,0,0,1,.854-.089,2.962,2.962,0,0,1,.921.129,1.941,1.941,0,0,1,.659.354,1.449,1.449,0,0,1,.4.533,1.691,1.691,0,0,1,.131.67v1.811c0,.317,0,.59.011.819s.013.431.02.61H208.4l-.049-.511Zm-.094-1.539c-.113-.027-.241-.05-.387-.072a3.065,3.065,0,0,0-.442-.032,1.192,1.192,0,0,0-.682.171.591.591,0,0,0-.251.524.66.66,0,0,0,.057.285.571.571,0,0,0,.154.2.656.656,0,0,0,.226.119.92.92,0,0,0,.273.04,1.156,1.156,0,0,0,.337-.048,1.614,1.614,0,0,0,.293-.119,1.381,1.381,0,0,0,.24-.162,1.785,1.785,0,0,0,.182-.174Z" transform="translate(-178.098 -34.962)"/>
          <path fill="currentColor" d="M179.111,2.06,177.051,0l-.375.375L176.3,0l-2.06,2.06,2.06,2.06.375-.375.375.375Zm-3.37,0,.934-.934.934.934-.934.934Z" transform="translate(-151.159)"/>
        </g>
      </svg>
    ),
    gitHub: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path 
          fill="currentColor" 
          d="M12,2.247A10,10,0,0,0,8.837,21.735c.5.094.684-.215.684-.481,0-.237-.009-.867-.013-1.7-2.781.6-3.368-1.342-3.368-1.342A2.648,2.648,0,0,0,5.027,16.75c-.905-.62.071-.608.071-.608a2.1,2.1,0,0,1,1.531,1.03A2.131,2.131,0,0,0,9.542,18a2.129,2.129,0,0,1,.633-1.337c-2.221-.25-4.555-1.11-4.555-4.942A3.859,3.859,0,0,1,6.649,9.042,3.558,3.558,0,0,1,6.737,6.4s.837-.268,2.75,1.025a9.415,9.415,0,0,1,5,0c1.9-1.293,2.737-1.025,2.737-1.025a3.652,3.652,0,0,1,.1,2.647,3.87,3.87,0,0,1,1.025,2.683c0,3.842-2.337,4.687-4.562,4.933a2.4,2.4,0,0,1,.675,1.85c0,1.339-.013,2.414-.013,2.739,0,.262.175.575.688.475A9.988,9.988,0,0,0,12,2.247"
        />
      </svg>
    ),
    twitter: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path 
          fill="currentColor" 
          d="M22.459,5.5a8.763,8.763,0,0,1-2.471.678A4.337,4.337,0,0,0,21.88,3.794,8.907,8.907,0,0,1,19.144,4.83,4.3,4.3,0,0,0,11.7,7.768a4.446,4.446,0,0,0,.111.983A12.194,12.194,0,0,1,2.935,4.266a4.226,4.226,0,0,0-.582,2.166,4.307,4.307,0,0,0,1.914,3.584,4.292,4.292,0,0,1-1.949-.539V9.53A4.306,4.306,0,0,0,5.77,13.753a4.342,4.342,0,0,1-1.935.075,4.318,4.318,0,0,0,4.028,2.989,8.629,8.629,0,0,1-5.339,1.842A9.277,9.277,0,0,1,1.5,18.6a12.254,12.254,0,0,0,6.613,1.932A12.159,12.159,0,0,0,20.361,8.3c0-.183,0-.367-.013-.551A8.69,8.69,0,0,0,22.5,5.516Z"
        />
      </svg>
    ),
  }
  