export function HiddenThreadMask() {
  return (
    <svg
      aria-hidden="true"
      className="hidden-thread-mask"
      data-hidden-thread-mask
      focusable="false"
      viewBox="0 0 320 360"
    >
      <g className="hidden-thread-mask-weave">
        <path d="M12 84 C72 74 94 103 160 116 C226 103 248 74 308 84" />
        <path d="M4 142 C66 126 105 147 160 171 C215 147 254 126 316 142" />
        <path d="M18 224 C78 196 112 221 160 249 C208 221 242 196 302 224" />
        <path d="M48 30 L160 116 L272 30 M22 176 L160 249 L298 176" />
        <path d="M88 9 C109 65 126 82 160 116 C194 82 211 65 232 9" />
        <circle cx="12" cy="84" r="2" />
        <circle cx="308" cy="84" r="2" />
        <circle cx="4" cy="142" r="2" />
        <circle cx="316" cy="142" r="2" />
        <circle cx="18" cy="224" r="2" />
        <circle cx="302" cy="224" r="2" />
      </g>

      <path
        className="hidden-thread-mask-mantle"
        d="M54 351 C65 292 86 262 113 246 L160 265 L207 246 C234 262 255 292 266 351 Z"
      />

      <g className="hidden-thread-mask-horns">
        <path d="M119 92 C82 79 57 45 74 4 C72 39 94 42 114 61 C122 68 125 78 119 92 Z" />
        <path d="M201 92 C238 79 263 45 246 4 C248 39 226 42 206 61 C198 68 195 78 201 92 Z" />
        <path d="M108 76 C85 61 81 37 85 20 C88 48 107 48 124 66" />
        <path d="M212 76 C235 61 239 37 235 20 C232 48 213 48 196 66" />
      </g>

      <path
        className="hidden-thread-mask-crown"
        d="M160 50 L193 67 L222 103 L216 197 L197 245 L160 279 L123 245 L104 197 L98 103 L127 67 Z"
      />
      <path className="hidden-thread-mask-crown-ridge" d="M160 50 L176 103 L160 184 L144 103 Z" />

      <g className="hidden-thread-mask-plates">
        <path d="M105 105 C119 83 139 81 158 103 L143 145 L112 153 L101 132 Z" />
        <path d="M215 105 C201 83 181 81 162 103 L177 145 L208 153 L219 132 Z" />
        <path d="M108 159 L142 149 L154 184 L128 207 L109 190 Z" />
        <path d="M212 159 L178 149 L166 184 L192 207 L211 190 Z" />
        <path d="M124 213 L151 191 L160 208 L169 191 L196 213 L186 247 L160 268 L134 247 Z" />
      </g>

      <path className="hidden-thread-mask-eye" d="M108 119 C122 105 140 108 153 121 C139 133 121 135 106 128 Z" />
      <path className="hidden-thread-mask-eye" d="M212 119 C198 105 180 108 167 121 C181 133 199 135 214 128 Z" />
      <path className="hidden-thread-mask-nose" d="M160 109 L174 179 L160 201 L146 179 Z" />

      <g className="hidden-thread-mask-teeth">
        <path d="M134 218 L145 211 L151 235 L139 231 Z" />
        <path d="M151 214 L160 208 L160 239 L153 235 Z" />
        <path d="M169 214 L160 208 L160 239 L167 235 Z" />
        <path d="M186 218 L175 211 L169 235 L181 231 Z" />
      </g>

      <g className="hidden-thread-mask-etching">
        <path d="M108 98 C128 85 143 72 160 55 C177 72 192 85 212 98" />
        <path d="M112 171 C130 160 144 165 160 184 C176 165 190 160 208 171" />
        <path d="M123 205 C142 197 150 198 160 208 C170 198 178 197 197 205" />
        <path d="M137 246 L160 260 L183 246" />
        <circle cx="160" cy="93" r="5" />
        <circle cx="160" cy="184" r="3" />
      </g>
    </svg>
  );
}
