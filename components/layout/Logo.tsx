'use client';

export function Logo() {
  return (
    <div className="flex items-center">
      <svg 
        className="w-10 h-10 md:w-12 md:h-12" 
        viewBox="0 0 375 375" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Curesaathi Logo"
      >
        {/* Main Logo Shape */}
        <path d="M185.598 222.012C184.996 221.027 183.949 220.383 182.797 220.293L174.957 219.676C170.234 219.305 165.977 216.441 163.852 212.207L162.926 210.359C162.266 209.047 162.25 207.477 162.977 206.199C163.73 204.883 165.082 204.07 166.586 204.023H174.594C172.027 199.969 167.398 197.688 162.609 198.137L154.426 198.902C150.922 199.23 147.77 196.812 147.125 193.352C146.648 190.785 146.398 188.141 146.398 185.434C146.398 171.723 152.816 159.512 162.816 151.645C152.91 158.168 145.199 167.754 141.043 179.059C144.789 151.828 168.148 130.852 196.41 130.852C213.906 130.852 229.52 138.891 239.77 151.473C228.879 135.34 210.445 124.719 189.527 124.664C156.047 124.578 128.648 151.859 128.598 185.344C128.578 197.129 131.922 208.133 137.715 217.457C137.836 217.652 137.957 217.852 138.082 218.047L146.191 216.672C149.817 216.059 152.797 219.562 151.566 223.023C151.531 223.121 151.512 223.172 151.512 223.172C156.734 225.07 155.852 230.156 155.852 230.156C160.465 232.262 158.566 236.602 158.566 236.602C160.195 237.277 160.766 238.594 160.914 239.023C160.992 239.246 161.074 239.461 161.156 239.68L164.312 247.773C164.855 249.164 166.52 250.305 168.016 250.305C169.899 250.305 171.203 248.422 170.539 246.656L169.062 242.727L167.094 237.484C166.957 237.117 167.207 236.719 167.605 236.688C167.867 236.668 168.105 236.84 168.203 237.082L170.793 243.312L172.707 247.922C173.367 249.508 175.109 250.422 176.758 249.938C178.734 249.359 179.718 247.148 178.828 245.293L174.086 235.5C173.883 235.078 174.16 234.586 174.625 234.543C174.895 234.516 175.152 234.652 175.281 234.891L181.047 245.637L181.762 246.969C182.465 248.281 184.008 248.965 185.426 248.5C186.523 248.133 187.258 247.215 187.453 246.172C187.57 245.539 187.488 244.859 187.168 244.234L182.652 235.488C182.457 235.105 182.602 234.609 183.004 234.445C183.355 234.297 183.754 234.449 183.926 234.777L189.027 244.41C189.438 245.188 190.051 245.793 190.77 246.191C191.965 246.852 193.449 246.945 194.77 246.32C195.023 246.203 195.258 246.059 195.477 245.898C197.285 244.586 197.852 242.059 196.641 240.074L185.598 222.012Z" fill="#003479"/>
        <path d="M226.402 223.406C230.18 216.801 232.34 209.148 232.34 200.992C232.34 198.297 232.102 195.656 231.652 193.094C229.82 203.266 224.414 212.199 216.773 218.531C212.352 222.199 205.769 221.457 202.312 216.871L195.855 208.316C194.781 206.895 193.102 206.059 191.32 206.059H166.719C165.023 206.07 163.938 207.84 164.691 209.344L165.672 211.293C167.492 214.918 171.074 217.328 175.117 217.648L176.574 217.762L182.957 218.266C184.762 218.406 186.391 219.406 187.336 220.953L190.227 225.683L191.848 228.332L200.922 243.176C201.086 243.441 201.285 243.676 201.516 243.867C202.184 244.422 203.082 244.656 203.957 244.438C227.516 238.625 245.652 219.098 249.414 194.82C246.109 207.273 237.625 217.621 226.402 223.406" fill="#00C2CB"/>
        {/* Cross Symbol */}
        <path d="M275.16 116.891H267.496V109.227C267.496 108.297 266.742 107.543 265.812 107.543H257.273C256.34 107.543 255.586 108.297 255.586 109.227V116.891H247.922C246.992 116.891 246.238 117.645 246.238 118.578V127.117C246.238 128.047 246.992 128.801 247.922 128.801H255.586V136.465C255.586 137.398 256.34 138.152 257.273 138.152H265.812C266.742 138.152 267.496 137.398 267.496 136.465V128.801H275.16C276.094 128.801 276.848 128.047 276.848 127.117V118.578C276.848 117.645 276.094 116.891 275.16 116.891Z" fill="#FF3131"/>
      </svg>
      <span className="ml-2 text-xl md:text-2xl font-bold">Cureसाथी</span>
    </div>
  );
}