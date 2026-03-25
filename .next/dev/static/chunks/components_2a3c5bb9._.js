(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ScrollSequence.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
const FRAME_COUNT = 91;
const SEQUENCE_DIR = '/sequence/';
function ScrollSequence() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loadedFrames, setLoadedFrames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track the scroll percentage inside the container body (0.0 to 1.0)
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            'start start',
            'end end'
        ]
    });
    // Smooth scroll progression map perfectly for jitter-free Canvas transitions
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    // Preload Image Sequence (0-119)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollSequence.useEffect": ()=>{
            let isCancelled = false;
            const preloadImages = {
                "ScrollSequence.useEffect.preloadImages": async ()=>{
                    const loaded = [];
                    let count = 0;
                    const promises = Array.from({
                        length: FRAME_COUNT
                    }, {
                        "ScrollSequence.useEffect.preloadImages.promises": (_, i)=>{
                            return new Promise({
                                "ScrollSequence.useEffect.preloadImages.promises": (resolve)=>{
                                    const img = new Image();
                                    img.src = `${SEQUENCE_DIR}frame_${i}.jpg`;
                                    img.onload = ({
                                        "ScrollSequence.useEffect.preloadImages.promises": ()=>{
                                            if (isCancelled) return;
                                            count++;
                                            setLoadedFrames(count);
                                            loaded[i] = img;
                                            resolve();
                                        }
                                    })["ScrollSequence.useEffect.preloadImages.promises"];
                                    img.onerror = ({
                                        "ScrollSequence.useEffect.preloadImages.promises": ()=>{
                                            // Resolve silently to prevent blocking UX on failed image load
                                            if (isCancelled) return;
                                            count++;
                                            setLoadedFrames(count);
                                            loaded[i] = img;
                                            resolve();
                                        }
                                    })["ScrollSequence.useEffect.preloadImages.promises"];
                                }
                            }["ScrollSequence.useEffect.preloadImages.promises"]);
                        }
                    }["ScrollSequence.useEffect.preloadImages.promises"]);
                    await Promise.all(promises);
                    if (isCancelled) return;
                    setImages(loaded);
                    // Artificial delay (600ms) for aesthetic perception of loading finishing gracefully
                    setTimeout({
                        "ScrollSequence.useEffect.preloadImages": ()=>setIsLoaded(true)
                    }["ScrollSequence.useEffect.preloadImages"], 600);
                }
            }["ScrollSequence.useEffect.preloadImages"];
            preloadImages();
            return ({
                "ScrollSequence.useEffect": ()=>{
                    isCancelled = true;
                    // Reset image sources to free up memory footprint when destroyed
                    images.forEach({
                        "ScrollSequence.useEffect": (img)=>{
                            img.src = '';
                        }
                    }["ScrollSequence.useEffect"]);
                }
            })["ScrollSequence.useEffect"];
        }
    }["ScrollSequence.useEffect"], []); // eslint-disable-line react-hooks/exhaustive-deps
    // Canvas Frame Rendering
    const renderFrame = (index)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const img = images[index];
        if (!img || !img.complete || img.naturalWidth === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }
        // "Contain" scaling relative to canvas device dimensions for fluid responsiveness
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const drawWidth = img.width * scale;
        const drawHeight = img.height * scale;
        const x = (canvas.width - drawWidth) / 2;
        const y = (canvas.height - drawHeight) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Smooth pixel manipulation for larger scales
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };
    // Attach Resize listeners and Scroll change effects to Draw canvas frames
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollSequence.useEffect": ()=>{
            if (!isLoaded || images.length === 0) return;
            const canvas = canvasRef.current;
            if (!canvas) return;
            // We isolate handleResize logic out to properly bind dimensions 
            const handleResize = {
                "ScrollSequence.useEffect.handleResize": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = window.innerWidth * dpr;
                    canvas.height = window.innerHeight * dpr;
                    // Fire redraw safely after a repaint event 
                    requestAnimationFrame({
                        "ScrollSequence.useEffect.handleResize": ()=>{
                            const currentProgress = smoothProgress.get();
                            const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(currentProgress * FRAME_COUNT));
                            renderFrame(frameIndex);
                        }
                    }["ScrollSequence.useEffect.handleResize"]);
                }
            }["ScrollSequence.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            handleResize();
            // Map `smoothProgress` value onto image frames
            const unsubscribe = smoothProgress.on('change', {
                "ScrollSequence.useEffect.unsubscribe": (latest)=>{
                    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
                    renderFrame(frameIndex);
                }
            }["ScrollSequence.useEffect.unsubscribe"]);
            return ({
                "ScrollSequence.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    unsubscribe();
                // Safely dispose the webgl context theoretically if we were using it, here 2d clears automatically
                }
            })["ScrollSequence.useEffect"];
        }
    }["ScrollSequence.useEffect"], [
        isLoaded,
        images
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    const loadingPercent = Math.round(loadedFrames / FRAME_COUNT * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 border-t-2 border-r-2 border-white/80 rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/ScrollSequence.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-8 h-8 border-b-2 border-l-2 border-white/40 rounded-full animate-[spin_1.5s_linear_reverse_infinite]"
                                }, void 0, false, {
                                    fileName: "[project]/components/ScrollSequence.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium tracking-[0.2em] text-white/50",
                            children: "INITIALIZING EXPERIENCE"
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-64 h-[1px] bg-white/10 relative overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 h-full bg-white transition-all duration-[50ms] ease-out",
                                style: {
                                    width: `${loadingPercent}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ScrollSequence.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-mono text-white/30 tracking-widest",
                            children: [
                                loadingPercent,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ScrollSequence.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative w-full",
                style: {
                    height: '400vh'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 h-screen w-full overflow-hidden bg-[#050505]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            className: "w-full h-full object-cover",
                            style: {
                                width: '100%',
                                height: '100%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollIndicator, {
                                    scrollYProgress: smoothProgress
                                }, void 0, false, {
                                    fileName: "[project]/components/ScrollSequence.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollytellingBeat, {
                                    scrollYProgress: smoothProgress,
                                    range: [
                                        0,
                                        0.20
                                    ],
                                    title: "ACTIVITY CAMP",
                                    subtitle: "AI based Activity Program Initiated by KERALA STATE RUTRONIX",
                                    align: "center"
                                }, void 0, false, {
                                    fileName: "[project]/components/ScrollSequence.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollytellingBeat, {
                                    scrollYProgress: smoothProgress,
                                    range: [
                                        0.25,
                                        0.45
                                    ],
                                    title: "30+ AI Based Courses",
                                    subtitle: "AI based Activity Program Initiated by KERALA STATE RUTRONIX",
                                    align: "left"
                                }, void 0, false, {
                                    fileName: "[project]/components/ScrollSequence.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollytellingBeat, {
                                    scrollYProgress: smoothProgress,
                                    range: [
                                        0.50,
                                        0.70
                                    ],
                                    title: "",
                                    subtitle: "PLAY | CREATE | INNOVATE",
                                    align: "right"
                                }, void 0, false, {
                                    fileName: "[project]/components/ScrollSequence.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ScrollSequence.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ScrollSequence, "NhIz4zQCWKanCdKqAAcMGaBmoNk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = ScrollSequence;
// ------------------------------------------------------------- 
// Micro-Components: Internal logic wrappers for the UI overlays 
// ------------------------------------------------------------- 
function ScrollIndicator({ scrollYProgress }) {
    _s1();
    // Fades indicator out perfectly across the first 10% scroll 
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.1
    ], [
        1,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            opacity
        },
        className: "absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center text-white/50 space-y-3 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs tracking-[0.2em] font-medium uppercase text-white/60",
                children: "Scroll to Explore"
            }, void 0, false, {
                fileName: "[project]/components/ScrollSequence.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/ScrollSequence.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ScrollSequence.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
_s1(ScrollIndicator, "6P+LDl0FOfC5Fz+MKy69szmJDvI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = ScrollIndicator;
function ScrollytellingBeat({ scrollYProgress, range, title, subtitle, align }) {
    _s2();
    const [start, end] = range;
    const padding = 0.05; // Fade duration relative padding 
    const opacityMap = [
        start,
        start + padding,
        end - padding,
        end
    ];
    /* Mapping fade-in vs fade-out on the scroll mapping timeline */ const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, opacityMap, [
        0,
        1,
        1,
        0
    ]);
    /* Translates vertically starting +20px inside the void entering its peak and ending -20px ascending further */ const yOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, opacityMap, [
        20,
        0,
        0,
        -20
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            opacity,
            y: yOffset
        },
        className: `absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-24 xl:px-32 pointer-events-none mx-auto max-w-[1500px]
        ${align === 'center' ? 'items-center text-center' : align === 'left' ? 'items-start text-left' : 'items-end text-right'}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-7xl md:text-8xl lg:text-9xl font-bold text-white/90 tracking-tighter leading-[0.9] mb-8",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ScrollSequence.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl md:text-2xl text-white/60 max-w-xl font-light leading-relaxed tracking-wide",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/ScrollSequence.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ScrollSequence.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
_s2(ScrollytellingBeat, "yNzINzTlh0tvvHkL11mFOazJJpA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = ScrollytellingBeat;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollSequence");
__turbopack_context__.k.register(_c1, "ScrollIndicator");
__turbopack_context__.k.register(_c2, "ScrollytellingBeat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ActivityCampSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityCampSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
const COURSES = [
    {
        idx: '01/09',
        emoji: '📣',
        name: 'AI Digital Marketing',
        color: 'gold',
        age: 'Age 14+ · Class 9+',
        desc: 'Master SEO, Google Ads, social media strategy, and AI copywriting. Run real campaigns and grow audiences using the latest AI marketing tools.',
        skills: [
            'SEO',
            'Google Ads',
            'Social Media AI',
            'Analytics'
        ]
    },
    {
        idx: '02/09',
        emoji: '💼',
        name: 'AI Office Suite',
        color: 'cyan',
        age: 'Age 13+ · Class 8+',
        desc: 'Supercharge productivity with AI in MS Word, Excel, PowerPoint and email. Automate reports, build smart spreadsheets, and design presentations in minutes.',
        skills: [
            'MS Word AI',
            'Excel AI',
            'PowerPoint AI',
            'Automation'
        ]
    },
    {
        idx: '03/09',
        emoji: '🌐',
        name: 'AI Web App Development',
        color: 'red',
        age: 'Age 15+ · Class 10+',
        desc: 'Build and deploy real web apps using HTML, CSS, JavaScript and React. AI coding assistants accelerate every step — ship your first live app before camp ends.',
        skills: [
            'HTML/CSS',
            'JavaScript',
            'React',
            'AI Coding'
        ]
    },
    {
        idx: '04/09',
        emoji: '🎬',
        name: 'Junior YouTuber',
        color: 'green',
        age: 'Age 10+ · Class 5+',
        desc: 'Script, film, edit, and publish. Use AI to create viral video ideas, stunning thumbnails, and grow a real YouTube channel.',
        skills: [
            'Scripting',
            'Editing',
            'AI Thumbnails',
            'YouTube SEO'
        ]
    },
    {
        idx: '05/09',
        emoji: '🧠',
        name: 'Junior AI Prompt Engineer',
        color: 'purple',
        age: 'Age 12+ · Class 7+',
        desc: 'Master the art of talking to AI. Learn prompt engineering for ChatGPT, Gemini, Claude and image generators — turn ideas into professional outputs instantly.',
        skills: [
            'Prompt Design',
            'ChatGPT',
            'Gemini',
            'Image Prompts'
        ]
    },
    {
        idx: '06/09',
        emoji: '🎨',
        name: 'AI Designer',
        color: 'pink',
        age: 'Age 10+ · Class 5+',
        desc: 'No drawing skills needed. Use Canva AI, Midjourney, and Adobe Firefly to design logos, posters, social media graphics and full brand identities.',
        skills: [
            'Canva AI',
            'Midjourney',
            'Adobe Firefly',
            'Logo Design'
        ]
    },
    {
        idx: '07/09',
        emoji: '🐍',
        name: 'Junior Python Programmer',
        color: 'gold',
        age: 'Age 13+ · Class 8+',
        desc: "Learn the world's most popular AI language from scratch. Write real Python scripts, build mini-apps, automate tasks, and understand the code behind AI tools.",
        skills: [
            'Python Basics',
            'Functions',
            'Mini Projects',
            'AI Automation'
        ]
    },
    {
        idx: '08/09',
        emoji: '🎮',
        name: 'Junior Game Developer',
        color: 'cyan',
        age: 'Age 12+ · Class 7+',
        desc: 'Design and build your own 2D games using beginner-friendly tools and AI assistance. Share your game with friends before camp ends!',
        skills: [
            'Game Design',
            '2D Development',
            'Scratch/Unity',
            'Publish & Share'
        ]
    },
    {
        idx: '09/09',
        emoji: '🤖',
        name: 'Generative AI & ChatGPT',
        color: 'red',
        age: 'Age 14+ · Class 9+',
        desc: "Master the most powerful AI tools of our era. Create text, images, code, and audio using ChatGPT, DALL·E, Sora, and more. Build AI workflows that work 24/7.",
        skills: [
            'ChatGPT Pro',
            'DALL·E',
            'Prompt Mastery',
            'AI Workflows'
        ]
    }
];
const STATS = [
    {
        num: 5000,
        label: 'Students Trained',
        color: '#FFB800',
        suffix: '+'
    },
    {
        num: 25,
        label: 'Days Per Course',
        color: '#00E5FF',
        suffix: ''
    },
    {
        num: 9,
        label: 'AI Courses',
        color: '#00FF9D',
        suffix: ''
    },
    {
        num: 95,
        label: 'Placement Rate',
        color: '#B47FFF',
        suffix: '%'
    }
];
const WHY_ITEMS = [
    {
        num: '01',
        title: 'Kerala State Rutronix Approved',
        body: 'Government-recognised certification valid across Kerala and India — accepted for government job applications and higher education.'
    },
    {
        num: '02',
        title: '5000+ Students Trained',
        body: 'Over a decade of quality computer education in Malayinkeezhu. Our alumni work in IT companies, run businesses, and hold government positions.'
    },
    {
        num: '03',
        title: 'Hands-On AI Projects',
        body: 'Every student builds real projects — not just theory. You leave camp with a portfolio of actual work to show colleges, employers, and clients.'
    },
    {
        num: '04',
        title: 'Malayalam + English Medium',
        body: 'Instruction in both languages ensures no student is left behind. Trainers are fluent in Malayalam and explain every concept until understood.'
    },
    {
        num: '05',
        title: '95% Placement Support',
        body: 'Career guidance, resume building, and placement assistance included. Our 95% placement rate speaks for itself.'
    }
];
const TIMELINE = [
    {
        dot: '🚀',
        day: 'Days 1–5 · Week 1',
        title: 'Foundation & AI Tool Onboarding',
        body: 'Orientation, tool setup, and skill baseline assessment. Get introduced to 14+ AI tools curated for your course. Build your first mini-project.'
    },
    {
        dot: '⚙️',
        day: 'Days 6–12 · Week 2',
        title: 'Core Skills Development',
        body: 'Deep-dive into course-specific tools and techniques. Work on structured assignments daily with peer learning and trainer feedback.'
    },
    {
        dot: '🛠️',
        day: 'Days 13–19 · Week 3',
        title: 'Real-World Project Build',
        body: 'Apply everything learned to build your major project — a real website, marketing campaign, YouTube channel, or AI design portfolio.'
    },
    {
        dot: '🎯',
        day: 'Days 20–24 · Week 4',
        title: 'Project Polish & Presentation',
        body: 'Refine your project with trainer mentorship. Prepare your presentation for the final day showcase. Career guidance and alumni networking.'
    },
    {
        dot: '🏅',
        day: 'Day 25 · Grand Finale',
        title: 'Certificate Ceremony & Showcase',
        body: 'Present your project to parents and guests. Receive your Kerala State Rutronix Government Certificate. Celebrate your transformation!'
    }
];
const TESTIMONIALS = [
    {
        stars: 5,
        quote: '"I joined the AI Digital Marketing course during my Plus Two vacation. Within 25 days I ran a real Google Ads campaign. Now I handle my uncle\'s shop social media and earn pocket money."',
        name: 'Arun M.',
        role: 'Plus Two Student · Trivandrum',
        avatar: '🧑'
    },
    {
        stars: 5,
        quote: '"My daughter attended the Junior YouTuber course. She now has 800 subscribers and posts regularly. The trainers were patient and explained everything in Malayalam."',
        name: 'Priya S. (Parent)',
        role: 'Daughter: Class 7 · Malayinkeezhu',
        avatar: '👩'
    },
    {
        stars: 5,
        quote: '"The AI Web App Development course was intense but incredibly rewarding. I deployed my first website live on Day 22. The Oxford team gave personal attention to every student."',
        name: 'Vishnu R.',
        role: 'BCA Student · Neyyattinkara',
        avatar: '👨‍💻'
    }
];
const FAQS = [
    {
        q: 'What is the AI Vacation Activity Camp 2026?',
        a: 'A 25-day AI-powered summer camp by The Oxford Computers, Malayinkeezhu. Students choose from 9 specialised AI courses and earn a Kerala State Rutronix Government Certificate on completion.'
    },
    {
        q: 'Who can join? What is the age requirement?',
        a: 'Open to school students from Class 5 onwards and college students up to degree level. Age varies by course — Junior YouTuber starts from age 10, AI Web App Dev requires Class 10+. No prior computer experience needed.'
    },
    {
        q: 'Is the certificate government recognised?',
        a: 'Yes. The Oxford Computers is Kerala State Rutronix-approved. The certificate is government-certified and nationally recognised — valid for government job applications and higher education admissions across Kerala.'
    },
    {
        q: 'How long is each course and what are the timings?',
        a: 'Each course is 25 days, conducted on weekdays. Classes run 2–3 hours per day. Morning, afternoon, and evening batches are available. Contact us to check current availability.'
    },
    {
        q: 'What is the fee for the AI Activity Camp?',
        a: 'Course fees vary by programme. Special early-bird rates and sibling discounts are available for the 2026 batch. Call +91 94473 29972 or visit us at Malayinkeezhu for the latest fee structure.'
    },
    {
        q: 'Is instruction in Malayalam or English?',
        a: 'Both. Trainers are fluent in Malayalam and English. Most classes are conducted bilingually so every student understands fully.'
    },
    {
        q: 'How do I register for the 2026 batch?',
        a: 'Fill the registration form below, call/WhatsApp +91 94473 29972, or visit The Oxford Computers at Malayinkeezhu, Trivandrum — 695571. Seats are limited; early registration is strongly recommended.'
    }
];
const SHEET_URL = 'https://script.google.com/macros/s/AKfycby8hn6MU0dRGPFcFPYSNM4sKj8xV0Zf6ilSIojIEVhJzUt8TmPU1q18Zoy-dM8eGTgB/exec';
const C = {
    gold: '#FFB800',
    cyan: '#00E5FF',
    red: '#FF3860',
    green: '#00FF9D',
    purple: '#B47FFF',
    pink: '#FF6EBF'
};
const CBORDER = {
    gold: 'rgba(255,184,0,.4)',
    cyan: 'rgba(0,229,255,.4)',
    red: 'rgba(255,56,96,.4)',
    green: 'rgba(0,255,157,.4)',
    purple: 'rgba(180,127,255,.4)',
    pink: 'rgba(255,110,191,.4)'
};
function FadeIn({ children, delay = 0, style }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-40px'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        style: style,
        initial: {
            opacity: 0,
            y: 28
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(FadeIn, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FadeIn;
function StatCounter({ target, suffix, color }) {
    _s1();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCounter.useEffect": ()=>{
            if (!inView) return;
            let n = 0;
            const step = {
                "StatCounter.useEffect.step": ()=>{
                    n += Math.ceil(target / 60);
                    if (n >= target) {
                        setCount(target);
                        return;
                    }
                    setCount(n);
                    requestAnimationFrame(step);
                }
            }["StatCounter.useEffect.step"];
            requestAnimationFrame(step);
        }
    }["StatCounter.useEffect"], [
        inView,
        target
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            fontFamily: 'Syne,sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(28px,7vw,52px)',
            lineHeight: 1,
            color,
            marginBottom: 6
        },
        children: [
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
}
_s1(StatCounter, "Ness7Bk+ak2NO8b+kFuWz5Za+RQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = StatCounter;
function CourseCard({ course, index }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const col = C[course.color], bdr = CBORDER[course.color];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        onClick: ()=>document.getElementById('ac-register')?.scrollIntoView({
                behavior: 'smooth'
            }),
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: '-20px'
        },
        transition: {
            duration: 0.6,
            delay: index % 3 * 0.07,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        style: {
            padding: 'clamp(22px,4vw,40px) clamp(18px,3.5vw,32px)',
            background: hovered ? 'rgba(3,6,15,.95)' : 'rgba(3,6,15,.6)',
            border: `1px solid ${hovered ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.05)'}`,
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
            transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: col,
                    transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.45s ease'
                }
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 'clamp(7px,1.5vw,9px)',
                    letterSpacing: '0.18em',
                    color: '#2a3050',
                    marginBottom: 14,
                    fontFamily: 'JetBrains Mono,monospace'
                },
                children: course.idx
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 'clamp(36px,7vw,46px)',
                    marginBottom: 14,
                    display: 'block',
                    lineHeight: 1
                },
                children: course.emoji
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: 'Syne,sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(17px,2.8vw,21px)',
                    lineHeight: 1.1,
                    marginBottom: 8,
                    color: col
                },
                children: course.name
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 'clamp(7px,1.4vw,8px)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 9px',
                    border: `1px solid ${bdr}`,
                    color: col,
                    display: 'inline-block',
                    marginBottom: 12,
                    fontFamily: 'JetBrains Mono,monospace'
                },
                children: course.age
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'DM Serif Display,serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(13px,2vw,15px)',
                    lineHeight: 1.6,
                    color: 'rgba(239,243,255,.48)',
                    marginBottom: 16
                },
                children: course.desc
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 4
                },
                children: course.skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 'clamp(6px,1.2vw,7px)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            padding: '3px 7px',
                            background: 'rgba(255,255,255,.03)',
                            border: '1px solid rgba(255,255,255,.06)',
                            color: '#2a3050',
                            fontFamily: 'JetBrains Mono,monospace'
                        },
                        children: s
                    }, s, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 100,
                        columnNumber: 33
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 14,
                    fontSize: 13,
                    color: col,
                    fontFamily: 'JetBrains Mono,monospace',
                    fontWeight: 700
                },
                children: "→ Enroll Now"
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 102,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s2(CourseCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c2 = CourseCard;
function FaqItem({ q, a }) {
    _s3();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderBottom: '1px solid rgba(255,255,255,.05)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen(!open),
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 0',
                    cursor: 'pointer',
                    gap: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'Syne,sans-serif',
                            fontWeight: 700,
                            fontSize: 'clamp(13px,2vw,15px)',
                            color: '#EFF3FF',
                            lineHeight: 1.3
                        },
                        children: q
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 24,
                            height: 24,
                            border: `1px solid ${open ? '#FFB800' : 'rgba(255,255,255,.1)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            background: open ? '#FFB800' : 'transparent',
                            color: open ? '#000507' : '#2a3050',
                            transform: open ? 'rotate(45deg)' : 'none',
                            transition: 'all 0.3s',
                            fontSize: 13
                        },
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    height: open ? 'auto' : 0,
                    opacity: open ? 1 : 0
                },
                initial: false,
                transition: {
                    duration: 0.3
                },
                style: {
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: 'DM Serif Display,serif',
                        fontStyle: 'italic',
                        fontSize: 'clamp(13px,2vw,15px)',
                        lineHeight: 1.7,
                        color: 'rgba(239,243,255,.5)',
                        paddingBottom: 18
                    },
                    children: a
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s3(FaqItem, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c3 = FaqItem;
function ActivityCampSection() {
    _s4();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        studentClass: '',
        course: '',
        location: '',
        message: ''
    });
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cd, setCd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        d: '--',
        h: '--',
        m: '--',
        s: '--'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityCampSection.useEffect": ()=>{
            const t = new Date('2026-04-01T00:00:00+05:30').getTime();
            const tick = {
                "ActivityCampSection.useEffect.tick": ()=>{
                    const diff = t - Date.now();
                    if (diff <= 0) {
                        setCd({
                            d: '00',
                            h: '00',
                            m: '00',
                            s: '00'
                        });
                        return;
                    }
                    setCd({
                        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
                        h: String(Math.floor(diff % 86400000 / 3600000)).padStart(2, '0'),
                        m: String(Math.floor(diff % 3600000 / 60000)).padStart(2, '0'),
                        s: String(Math.floor(diff % 60000 / 1000)).padStart(2, '0')
                    });
                }
            }["ActivityCampSection.useEffect.tick"];
            tick();
            const id = setInterval(tick, 1000);
            return ({
                "ActivityCampSection.useEffect": ()=>clearInterval(id)
            })["ActivityCampSection.useEffect"];
        }
    }["ActivityCampSection.useEffect"], []);
    const showToast = (msg, ok)=>{
        setToast({
            msg,
            ok
        });
        setTimeout(()=>setToast(null), 4000);
    };
    const submit = async ()=>{
        if (!form.name || !form.phone || !form.course) {
            showToast('⚠️ Please fill Name, Phone & Course', false);
            return;
        }
        setSending(true);
        const ist = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour12: true
        });
        try {
            await fetch(SHEET_URL, {
                method: 'POST',
                body: JSON.stringify({
                    timestamp: ist,
                    source: 'ActivityCamp2026',
                    ...form
                })
            });
            showToast('✓ Application Received! We will call you soon.', true);
            setForm({
                name: '',
                phone: '',
                studentClass: '',
                course: '',
                location: '',
                message: ''
            });
        } catch  {
            showToast('✓ Received! Check your connection.', true);
        }
        setSending(false);
    };
    const inp = {
        width: '100%',
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.07)',
        padding: '12px 15px',
        color: '#EFF3FF',
        fontFamily: 'JetBrains Mono,monospace',
        fontSize: 'clamp(12px,2vw,13px)',
        outline: 'none',
        borderRadius: 0
    };
    const scrollTo = (id)=>(e)=>{
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth'
            });
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#000507',
            color: '#EFF3FF',
            fontFamily: 'JetBrains Mono,monospace',
            overflowX: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;700&display=swap');
        @keyframes gDrift{to{background-position:64px 64px,64px 64px;}}
        @keyframes breathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.12)}}
        @keyframes tickR{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes ctaP{0%,100%{opacity:.6}50%{opacity:1}}
        *{box-sizing:border-box;}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;}
        .g3w{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
        .g4{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;}
        .g2c{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;}
        .g2w{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;}
        .gf{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:36px;}
        .sp{padding:clamp(64px,10vw,112px) clamp(20px,5vw,56px);}
        .mx{max-width:1200px;margin:0 auto;}
        .sl{font-size:clamp(7px,1.6vw,9px);letter-spacing:.36em;text-transform:uppercase;color:#00E5FF;display:block;margin-bottom:13px;font-family:'JetBrains Mono',monospace;}
        .st{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(30px,6.5vw,68px);line-height:.93;margin-bottom:20px;}
        .sb{font-family:'DM Serif Display',serif;font-style:italic;font-size:clamp(14px,2.2vw,17px);line-height:1.7;color:rgba(239,243,255,.5);}
        @media(max-width:860px){
          .g2{grid-template-columns:1fr;}
          .g3{grid-template-columns:1fr;}
          .g3w{grid-template-columns:1fr;}
          .g4{grid-template-columns:1fr 1fr;}
          .g2c{grid-template-columns:1fr;gap:40px;}
          .g2w{grid-template-columns:1fr;gap:36px;}
          .gf{grid-template-columns:1fr 1fr;gap:24px;}
          .why-vis{display:none !important;}
        }
        @media(max-width:520px){
          .g4{grid-template-columns:1fr 1fr;}
          .gf{grid-template-columns:1fr;}
          .hero-btns{flex-direction:column;align-items:stretch !important;}
          .hero-btns a{text-align:center;}
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: toast.ok ? '#00FF9D' : '#FF3860',
                    color: '#000507',
                    fontFamily: 'JetBrains Mono,monospace',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '13px 26px',
                    zIndex: 9999,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 8px 32px rgba(0,0,0,.4)'
                },
                children: toast.msg
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 192,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Vacation%20Activity%20Camp%202026.",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    position: 'fixed',
                    bottom: 22,
                    right: 22,
                    zIndex: 8500,
                    width: 52,
                    height: 52,
                    background: '#25D366',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 24px rgba(37,211,102,.45)',
                    textDecoration: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    style: {
                        width: 25,
                        height: 25,
                        fill: '#fff'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 197,
                        columnNumber: 82
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: 'clamp(90px,14vw,130px) clamp(20px,5vw,48px) clamp(56px,8vw,80px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'linear-gradient(rgba(0,229,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.02) 1px,transparent 1px)',
                            backgroundSize: '64px 64px',
                            animation: 'gDrift 25s linear infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            width: 'min(700px,130vw)',
                            height: 'min(700px,130vw)',
                            background: 'radial-gradient(circle,rgba(255,184,0,.08) 0%,transparent 70%)',
                            borderRadius: '50%',
                            top: '40%',
                            left: '30%',
                            transform: 'translate(-50%,-50%)',
                            animation: 'breathe 6s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            zIndex: 2,
                            maxWidth: 'min(960px,96vw)',
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .3,
                                    duration: .8
                                },
                                className: "sl",
                                style: {
                                    marginBottom: 18
                                },
                                children: "🌐 Kerala State Rutronix Approved · Vacation Activity Camp"
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .5,
                                    duration: .8
                                },
                                style: {
                                    display: 'flex',
                                    gap: 7,
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    marginBottom: 24
                                },
                                children: [
                                    [
                                        '25 Days',
                                        '#FFB800'
                                    ],
                                    [
                                        '9 AI Courses',
                                        '#00E5FF'
                                    ],
                                    [
                                        'Gov Certified',
                                        '#00FF9D'
                                    ],
                                    [
                                        'Limited Seats',
                                        '#FF3860'
                                    ]
                                ].map(([l, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 'clamp(7px,1.6vw,8px)',
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            padding: '5px 11px',
                                            border: `1px solid ${c}`,
                                            color: c,
                                            fontFamily: 'JetBrains Mono,monospace'
                                        },
                                        children: l
                                    }, l, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: .7,
                                    duration: .9
                                },
                                style: {
                                    fontFamily: 'Syne,sans-serif',
                                    fontWeight: 800,
                                    fontSize: 'clamp(40px,11vw,112px)',
                                    lineHeight: .88,
                                    letterSpacing: '-0.04em',
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            color: '#FFB800'
                                        },
                                        children: "AI Vacation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            color: '#EFF3FF'
                                        },
                                        children: "Activity"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            color: 'transparent',
                                            WebkitTextStroke: '1.5px rgba(240,243,255,.18)'
                                        },
                                        children: "Camp 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .9,
                                    duration: .8
                                },
                                style: {
                                    fontFamily: 'DM Serif Display,serif',
                                    fontStyle: 'italic',
                                    fontSize: 'clamp(14px,2.8vw,21px)',
                                    color: 'rgba(239,243,255,.45)',
                                    marginBottom: 10
                                },
                                children: "25 days. 9 AI-powered courses. One life-changing summer."
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1.05
                                },
                                style: {
                                    fontSize: 'clamp(7px,1.6vw,9px)',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: '#2a3050',
                                    marginBottom: 32
                                },
                                children: [
                                    "📍 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#FFB800'
                                        },
                                        children: "The Oxford Computers"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 225,
                                        columnNumber: 16
                                    }, this),
                                    " · Malayinkeezhu, Trivandrum"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1.15
                                },
                                className: "hero-btns",
                                style: {
                                    display: 'flex',
                                    gap: 10,
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    marginBottom: 44
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#ac-register",
                                        onClick: scrollTo('ac-register'),
                                        style: {
                                            background: '#FFB800',
                                            color: '#000507',
                                            fontFamily: 'JetBrains Mono,monospace',
                                            fontSize: 'clamp(9px,1.8vw,10px)',
                                            fontWeight: 700,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 7
                                        },
                                        children: "Apply for 2026 Batch →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#ac-courses",
                                        onClick: scrollTo('ac-courses'),
                                        style: {
                                            background: 'transparent',
                                            color: '#EFF3FF',
                                            fontFamily: 'JetBrains Mono,monospace',
                                            fontSize: 'clamp(9px,1.8vw,10px)',
                                            fontWeight: 700,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)',
                                            border: '1px solid #2a3050',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 7
                                        },
                                        children: "View All 9 Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1.35
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 'clamp(7px,1.5vw,8px)',
                                            letterSpacing: '0.22em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 10
                                        },
                                        children: "Camp starts soon — secure your seat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 'clamp(6px,2vw,12px)',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            [
                                                'd',
                                                'Days'
                                            ],
                                            [
                                                'h',
                                                'Hours'
                                            ],
                                            [
                                                'm',
                                                'Mins'
                                            ],
                                            [
                                                's',
                                                'Secs'
                                            ]
                                        ].map(([k, u], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'Syne,sans-serif',
                                                            fontWeight: 800,
                                                            fontSize: 'clamp(20px,4.5vw,28px)',
                                                            color: '#2a3050'
                                                        },
                                                        children: ":"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 'clamp(52px,12vw,68px)',
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Syne,sans-serif',
                                                                    fontWeight: 800,
                                                                    fontSize: 'clamp(26px,6.5vw,34px)',
                                                                    color: '#FFB800',
                                                                    lineHeight: 1,
                                                                    display: 'block'
                                                                },
                                                                children: cd[k]
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 'clamp(6px,1.3vw,7px)',
                                                                    letterSpacing: '0.16em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#2a3050',
                                                                    marginTop: 3,
                                                                    display: 'block'
                                                                },
                                                                children: u
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, k, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#FFB800',
                    overflow: 'hidden',
                    padding: '11px 0'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        animation: 'tickR 30s linear infinite',
                        whiteSpace: 'nowrap'
                    },
                    children: [
                        ...Array(2)
                    ].map((_, r)=>[
                            'AI Digital Marketing',
                            'AI Office Suite',
                            'AI Web App Dev',
                            'Junior YouTuber',
                            'AI Prompt Engineer',
                            'AI Designer',
                            'Junior Python',
                            'Game Dev',
                            'Generative AI',
                            '25 Days',
                            'Rutronix Approved',
                            'Limited Seats'
                        ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'Syne,sans-serif',
                                    fontWeight: 800,
                                    fontSize: 'clamp(9px,1.8vw,11px)',
                                    letterSpacing: '0.16em',
                                    textTransform: 'uppercase',
                                    color: '#000507',
                                    padding: '0 22px',
                                    flexShrink: 0
                                },
                                children: [
                                    t,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 6
                                        },
                                        children: "★"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 252,
                                        columnNumber: 240
                                    }, this)
                                ]
                            }, `${r}-${i}`, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: '#080d18',
                    padding: 'clamp(36px,7vw,52px) clamp(20px,5vw,56px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "g4 mx",
                    children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                            delay: i * 0.09,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 'clamp(22px,4vw,36px) clamp(14px,3vw,28px)',
                                    background: 'rgba(255,255,255,.015)',
                                    textAlign: 'center',
                                    borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.04)' : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCounter, {
                                        target: s.num,
                                        suffix: s.suffix,
                                        color: s.color
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 'clamp(7px,1.4vw,8px)',
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050'
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/ActivityCampSection.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "ac-courses",
                className: "sp",
                style: {
                    background: '#000507',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg,transparent,#FFB800,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx",
                        style: {
                            marginBottom: 40
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sl",
                                    children: "Nine AI Courses · Pick Your Passion"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 275,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "st",
                                    children: [
                                        "The ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFB800'
                                            },
                                            children: "2026"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 276,
                                            columnNumber: 54
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 276,
                                            columnNumber: 100
                                        }, this),
                                        "Course ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'transparent',
                                                WebkitTextStroke: '1px rgba(239,243,255,.18)'
                                            },
                                            children: "Lineup"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 276,
                                            columnNumber: 113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 276,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.15,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sb",
                                    style: {
                                        maxWidth: 400
                                    },
                                    children: "Choose any one course for your 25-day journey — or discuss combinations with our counsellors."
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 277,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx",
                            style: {
                                marginBottom: 36
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg,rgba(255,184,0,.08),rgba(0,229,255,.06),rgba(180,127,255,.08))',
                                    border: '1px solid rgba(255,184,0,.25)',
                                    padding: 'clamp(22px,4vw,38px) clamp(18px,3.5vw,40px)',
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 4,
                                            height: '100%',
                                            background: 'linear-gradient(180deg,#FFB800,#00E5FF,#B47FFF)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 18,
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 'clamp(32px,6vw,44px)',
                                                    lineHeight: 1,
                                                    flexShrink: 0
                                                },
                                                children: "🏛️"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 200
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 7,
                                                            flexWrap: 'wrap',
                                                            marginBottom: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 'clamp(6px,1.4vw,8px)',
                                                                    letterSpacing: '0.22em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#FFB800',
                                                                    background: 'rgba(255,184,0,.12)',
                                                                    border: '1px solid rgba(255,184,0,.3)',
                                                                    padding: '3px 9px',
                                                                    fontFamily: 'JetBrains Mono,monospace'
                                                                },
                                                                children: "Kerala State Rutronix"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 'clamp(6px,1.4vw,8px)',
                                                                    letterSpacing: '0.18em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#00E5FF',
                                                                    background: 'rgba(0,229,255,.1)',
                                                                    border: '1px solid rgba(0,229,255,.25)',
                                                                    padding: '3px 9px',
                                                                    fontFamily: 'JetBrains Mono,monospace'
                                                                },
                                                                children: "🤖 14+ AI Tools"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: 'Syne,sans-serif',
                                                            fontWeight: 800,
                                                            fontSize: 'clamp(16px,3vw,28px)',
                                                            lineHeight: 1.1,
                                                            marginBottom: 10,
                                                            color: '#EFF3FF'
                                                        },
                                                        children: [
                                                            '"AI Education for All" ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#FFB800'
                                                                },
                                                                children: "— Kerala State Rutronix"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 192
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'DM Serif Display,serif',
                                                            fontStyle: 'italic',
                                                            fontSize: 'clamp(13px,2vw,15px)',
                                                            lineHeight: 1.65,
                                                            color: 'rgba(239,243,255,.65)',
                                                            marginBottom: 14
                                                        },
                                                        children: [
                                                            "Along with your chosen course, explore ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: '#FFB800',
                                                                    fontStyle: 'normal'
                                                                },
                                                                children: "14+ powerful AI tools"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 233
                                                            }, this),
                                                            " to supercharge your learning."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: 5
                                                        },
                                                        children: [
                                                            [
                                                                'ChatGPT',
                                                                '#FFB800'
                                                            ],
                                                            [
                                                                'Gemini AI',
                                                                '#00E5FF'
                                                            ],
                                                            [
                                                                'Midjourney',
                                                                '#00FF9D'
                                                            ],
                                                            [
                                                                'Canva AI',
                                                                '#B47FFF'
                                                            ],
                                                            [
                                                                'Claude AI',
                                                                '#FF6EBF'
                                                            ],
                                                            [
                                                                'Adobe Firefly',
                                                                '#FF7A2F'
                                                            ],
                                                            [
                                                                '+ 8 More',
                                                                'rgba(239,243,255,.6)'
                                                            ]
                                                        ].map(([t, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 'clamp(6px,1.2vw,8px)',
                                                                    letterSpacing: '0.1em',
                                                                    textTransform: 'uppercase',
                                                                    padding: '3px 8px',
                                                                    border: `1px solid ${c}40`,
                                                                    color: c,
                                                                    fontFamily: 'JetBrains Mono,monospace'
                                                                },
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ActivityCampSection.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "g3 mx",
                        children: COURSES.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCard, {
                                course: c,
                                index: i
                            }, i, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 303,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sp",
                style: {
                    background: '#080d18',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg,transparent,#00E5FF,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sl",
                                    children: "Eligibility"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 311,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "st",
                                    children: [
                                        "Who Can ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFB800'
                                            },
                                            children: "Join?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 312,
                                            columnNumber: 58
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 312,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.15,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sb",
                                    style: {
                                        maxWidth: 500,
                                        marginBottom: 40
                                    },
                                    children: "Built for young minds at every level. No prior computer knowledge required — just curiosity and willingness to learn."
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 313,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "g3w",
                                children: [
                                    {
                                        icon: '🏫',
                                        title: 'School Students',
                                        body: 'Class 5 to Class 12. Both Malayalam and English medium welcome. Separate junior (5–8) and senior (9–12) batches ensure the right pace.',
                                        accent: '#FFB800'
                                    },
                                    {
                                        icon: '🎓',
                                        title: 'College Students',
                                        body: "Degree, Diploma, and Plus Two students. Vacation time is the perfect opportunity to gain AI skills your course doesn't teach.",
                                        accent: '#00E5FF'
                                    },
                                    {
                                        icon: '👩‍💻',
                                        title: 'Beginners Welcome',
                                        body: 'Zero computer knowledge needed. Trainers start from basics and guide every student through real projects in both Malayalam and English.',
                                        accent: '#00FF9D'
                                    }
                                ].map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                        delay: i * 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: 'clamp(24px,4.5vw,38px) clamp(18px,3.5vw,30px)',
                                                background: 'rgba(3,6,15,.5)',
                                                border: '1px solid rgba(255,255,255,.05)',
                                                position: 'relative'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: 3,
                                                        height: '100%',
                                                        background: card.accent
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 'clamp(34px,7vw,42px)',
                                                        marginBottom: 14,
                                                        display: 'block'
                                                    },
                                                    children: card.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: 'Syne,sans-serif',
                                                        fontWeight: 800,
                                                        fontSize: 'clamp(17px,3vw,21px)',
                                                        color: '#EFF3FF',
                                                        marginBottom: 8
                                                    },
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: 'DM Serif Display,serif',
                                                        fontStyle: 'italic',
                                                        fontSize: 'clamp(13px,2vw,15px)',
                                                        lineHeight: 1.65,
                                                        color: 'rgba(239,243,255,.5)'
                                                    },
                                                    children: card.body
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sp",
                style: {
                    background: '#000507',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg,transparent,#B47FFF,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sl",
                                    children: "Our Advantage"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 337,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "st",
                                    children: [
                                        "Why Choose ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFB800'
                                            },
                                            children: "Oxford?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 338,
                                            columnNumber: 61
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 338,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "g2w",
                                style: {
                                    marginTop: 36
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: WHY_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                                delay: i * 0.09,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: 16,
                                                        padding: 'clamp(18px,3.5vw,26px) 0',
                                                        borderBottom: i < WHY_ITEMS.length - 1 ? '1px solid rgba(255,255,255,.04)' : 'none',
                                                        alignItems: 'flex-start'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: 'Syne,sans-serif',
                                                                fontWeight: 800,
                                                                fontSize: 12,
                                                                color: '#FFB800',
                                                                minWidth: 24,
                                                                marginTop: 2,
                                                                flexShrink: 0
                                                            },
                                                            children: item.num
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: 'Syne,sans-serif',
                                                                        fontWeight: 800,
                                                                        fontSize: 'clamp(14px,2.5vw,17px)',
                                                                        color: '#EFF3FF',
                                                                        marginBottom: 5
                                                                    },
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: 'DM Serif Display,serif',
                                                                        fontStyle: 'italic',
                                                                        fontSize: 'clamp(13px,1.8vw,15px)',
                                                                        lineHeight: 1.65,
                                                                        color: 'rgba(239,243,255,.45)'
                                                                    },
                                                                    children: item.body
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "why-vis",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                            delay: 0.2,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '100%',
                                                    aspectRatio: '1/1',
                                                    background: 'rgba(3,6,15,.6)',
                                                    border: '1px solid rgba(255,255,255,.05)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 18
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            inset: 0,
                                                            background: 'radial-gradient(circle at 50% 50%,rgba(255,184,0,.07) 0%,transparent 65%)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 80
                                                        },
                                                        children: "🏛️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            border: '1px solid rgba(255,184,0,.3)',
                                                            padding: '13px 22px',
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: 'Syne,sans-serif',
                                                                    fontWeight: 800,
                                                                    fontSize: 13,
                                                                    color: '#FFB800',
                                                                    letterSpacing: '0.1em',
                                                                    marginBottom: 4
                                                                },
                                                                children: "GOVERNMENT CERTIFIED"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.13em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#2a3050'
                                                                },
                                                                children: "Kerala State Rutronix Approved"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: '#FFB800',
                                                            fontSize: 15,
                                                            letterSpacing: 4
                                                        },
                                                        children: "★★★★★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 353,
                                            columnNumber: 38
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sp",
                style: {
                    background: '#080d18',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg,transparent,#00FF9D,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sl",
                                    children: "25-Day Journey"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 372,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "st",
                                    children: [
                                        "Camp ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFB800'
                                            },
                                            children: "Schedule"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 373,
                                            columnNumber: 55
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 373,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 820,
                                    marginTop: 36,
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            left: 26,
                                            top: 0,
                                            bottom: 0,
                                            width: 1,
                                            background: 'linear-gradient(to bottom,#FFB800,#00E5FF,#00FF9D,#B47FFF)',
                                            opacity: .3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    TIMELINE.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                            delay: i * 0.1,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 'clamp(18px,3.5vw,36px)',
                                                    marginBottom: 'clamp(28px,5vw,48px)',
                                                    position: 'relative'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 'clamp(40px,7vw,52px)',
                                                            height: 'clamp(40px,7vw,52px)',
                                                            background: 'rgba(3,6,15,.8)',
                                                            border: '1px solid rgba(255,184,0,.3)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: 'clamp(16px,3.5vw,20px)',
                                                            flexShrink: 0,
                                                            position: 'relative',
                                                            zIndex: 2
                                                        },
                                                        children: item.dot
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            paddingTop: 4,
                                                            minWidth: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 'clamp(6px,1.4vw,8px)',
                                                                    letterSpacing: '0.2em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#FFB800',
                                                                    marginBottom: 5,
                                                                    fontFamily: 'JetBrains Mono,monospace'
                                                                },
                                                                children: item.day
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontFamily: 'Syne,sans-serif',
                                                                    fontWeight: 800,
                                                                    fontSize: 'clamp(15px,2.8vw,19px)',
                                                                    color: '#EFF3FF',
                                                                    marginBottom: 5
                                                                },
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: 'DM Serif Display,serif',
                                                                    fontStyle: 'italic',
                                                                    fontSize: 'clamp(12px,1.8vw,14px)',
                                                                    lineHeight: 1.65,
                                                                    color: 'rgba(239,243,255,.45)'
                                                                },
                                                                children: item.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sp",
                style: {
                    background: '#000507',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg,transparent,#FF6EBF,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sl",
                                    children: "Student Success"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 396,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "st",
                                    children: [
                                        "What Our ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFB800'
                                            },
                                            children: "Students Say"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 397,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 397,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "g3w",
                                style: {
                                    marginTop: 36
                                },
                                children: TESTIMONIALS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                        delay: i * 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: 'clamp(24px,4.5vw,38px) clamp(18px,3.5vw,30px)',
                                                background: 'rgba(3,6,15,.6)',
                                                border: '1px solid rgba(255,255,255,.05)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#FFB800',
                                                        fontSize: 13,
                                                        letterSpacing: 3,
                                                        marginBottom: 14
                                                    },
                                                    children: '★'.repeat(t.stars)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: 'DM Serif Display,serif',
                                                        fontStyle: 'italic',
                                                        fontSize: 'clamp(13px,2vw,15px)',
                                                        lineHeight: 1.75,
                                                        color: 'rgba(239,243,255,.6)',
                                                        marginBottom: 18
                                                    },
                                                    children: t.quote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 11
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: 36,
                                                                height: 36,
                                                                background: 'rgba(255,184,0,.12)',
                                                                border: '1px solid rgba(255,184,0,.25)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                fontSize: 16,
                                                                flexShrink: 0
                                                            },
                                                            children: t.avatar
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: 'Syne,sans-serif',
                                                                        fontWeight: 700,
                                                                        fontSize: 12,
                                                                        color: '#EFF3FF'
                                                                    },
                                                                    children: t.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 'clamp(6px,1.3vw,8px)',
                                                                        letterSpacing: '0.1em',
                                                                        textTransform: 'uppercase',
                                                                        color: '#2a3050',
                                                                        fontFamily: 'JetBrains Mono,monospace'
                                                                    },
                                                                    children: t.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sp",
                style: {
                    background: '#080d18',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg,transparent,#FFB800,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sl",
                                    children: "FAQs"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 422,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "st",
                                    children: [
                                        "Common ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFB800'
                                            },
                                            children: "Questions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 423,
                                            columnNumber: 57
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 423,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 740,
                                    marginTop: 36
                                },
                                children: FAQS.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                        delay: i * 0.05,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                            q: faq.q,
                                            a: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 425,
                                            columnNumber: 68
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 425,
                                        columnNumber: 35
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "ac-register",
                className: "sp",
                style: {
                    background: '#000507',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(90deg,transparent,#00E5FF,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse at 50% 60%,rgba(0,229,255,.05) 0%,transparent 65%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "g2c mx",
                        style: {
                            position: 'relative',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sl",
                                        children: "Register Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "st",
                                        children: [
                                            "Apply for",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 437,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#FFB800'
                                                },
                                                children: "2026 Batch"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 437,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sb",
                                        style: {
                                            marginBottom: 28
                                        },
                                        children: "Seats are limited. Fill the form and our team will call you within 24 hours to confirm your spot."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "g2",
                                        style: {
                                            marginBottom: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: 'clamp(7px,1.4vw,8px)',
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase',
                                                            color: '#2a3050',
                                                            display: 'block',
                                                            marginBottom: 6,
                                                            fontFamily: 'JetBrains Mono,monospace'
                                                        },
                                                        children: "Student Name *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inp,
                                                        placeholder: "Full name",
                                                        value: form.name,
                                                        onChange: (e)=>setForm((p)=>({
                                                                    ...p,
                                                                    name: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 440,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: 'clamp(7px,1.4vw,8px)',
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase',
                                                            color: '#2a3050',
                                                            display: 'block',
                                                            marginBottom: 6,
                                                            fontFamily: 'JetBrains Mono,monospace'
                                                        },
                                                        children: "WhatsApp Number *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inp,
                                                        type: "tel",
                                                        placeholder: "+91 XXXXX XXXXX",
                                                        value: form.phone,
                                                        onChange: (e)=>setForm((p)=>({
                                                                    ...p,
                                                                    phone: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 444,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "g2",
                                        style: {
                                            marginBottom: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: 'clamp(7px,1.4vw,8px)',
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase',
                                                            color: '#2a3050',
                                                            display: 'block',
                                                            marginBottom: 6,
                                                            fontFamily: 'JetBrains Mono,monospace'
                                                        },
                                                        children: "Class / Course Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inp,
                                                        placeholder: "e.g. Class 10 / B.Com 2nd yr",
                                                        value: form.studentClass,
                                                        onChange: (e)=>setForm((p)=>({
                                                                    ...p,
                                                                    studentClass: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 450,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: 'clamp(7px,1.4vw,8px)',
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase',
                                                            color: '#2a3050',
                                                            display: 'block',
                                                            marginBottom: 6,
                                                            fontFamily: 'JetBrains Mono,monospace'
                                                        },
                                                        children: "Preferred AI Course *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        style: {
                                                            ...inp,
                                                            appearance: 'none'
                                                        },
                                                        value: form.course,
                                                        onChange: (e)=>setForm((p)=>({
                                                                    ...p,
                                                                    course: e.target.value
                                                                })),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select a course"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "AI Digital Marketing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "AI Office Suite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "AI Web App Development"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Junior YouTuber"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Junior AI Prompt Engineer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "AI Designer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Junior Python Programmer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Junior Game Developer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Generative AI & ChatGPT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Not decided yet — please advise"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontSize: 'clamp(7px,1.4vw,8px)',
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase',
                                                    color: '#2a3050',
                                                    display: 'block',
                                                    marginBottom: 6,
                                                    fontFamily: 'JetBrains Mono,monospace'
                                                },
                                                children: "Your Location / Area"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: inp,
                                                placeholder: "e.g. Neyyattinkara, Attingal, Trivandrum",
                                                value: form.location,
                                                onChange: (e)=>setForm((p)=>({
                                                            ...p,
                                                            location: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontSize: 'clamp(7px,1.4vw,8px)',
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase',
                                                    color: '#2a3050',
                                                    display: 'block',
                                                    marginBottom: 6,
                                                    fontFamily: 'JetBrains Mono,monospace'
                                                },
                                                children: "Any Questions? (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 476,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                style: {
                                                    ...inp,
                                                    resize: 'vertical',
                                                    minHeight: 76
                                                },
                                                placeholder: "Fee details, batch timings, course doubts...",
                                                value: form.message,
                                                onChange: (e)=>setForm((p)=>({
                                                            ...p,
                                                            message: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 477,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: submit,
                                        disabled: sending,
                                        style: {
                                            width: '100%',
                                            background: '#FFB800',
                                            color: '#000507',
                                            fontFamily: 'JetBrains Mono,monospace',
                                            fontSize: 'clamp(9px,1.8vw,11px)',
                                            fontWeight: 700,
                                            letterSpacing: '0.16em',
                                            textTransform: 'uppercase',
                                            padding: 'clamp(13px,2.5vw,17px)',
                                            border: 'none',
                                            cursor: 'pointer'
                                        },
                                        children: sending ? 'Sending...' : 'Reserve My Seat →'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 'clamp(6px,1.3vw,8px)',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginTop: 9,
                                            textAlign: 'center'
                                        },
                                        children: "🔒 Your data is safe. We will never share your information."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 483,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.2,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Syne,sans-serif',
                                            fontWeight: 800,
                                            fontSize: 'clamp(15px,2.5vw,18px)',
                                            color: '#EFF3FF',
                                            marginBottom: 18
                                        },
                                        children: "Contact Us Directly"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        {
                                            icon: '📞',
                                            lbl: 'Phone / WhatsApp',
                                            val: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+919447329972",
                                                style: {
                                                    color: '#FFB800',
                                                    textDecoration: 'none'
                                                },
                                                children: "+91 94473 29972"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 489,
                                                columnNumber: 59
                                            }, this)
                                        },
                                        {
                                            icon: '✉️',
                                            lbl: 'Email',
                                            val: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:t.005.rutronix@gmail.com",
                                                style: {
                                                    color: '#FFB800',
                                                    textDecoration: 'none',
                                                    wordBreak: 'break-all'
                                                },
                                                children: "t.005.rutronix@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 490,
                                                columnNumber: 48
                                            }, this)
                                        },
                                        {
                                            icon: '📍',
                                            lbl: 'Address',
                                            val: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "The Oxford Computers",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 72
                                                    }, this),
                                                    "Malayinkeezhu, Thiruvananthapuram",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 111
                                                    }, this),
                                                    "Kerala — 695571"
                                                ]
                                            }, void 0, true)
                                        },
                                        {
                                            icon: '🕐',
                                            lbl: 'Office Hours',
                                            val: 'Mon – Sat: 9:00 AM – 6:00 PM'
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 13,
                                                alignItems: 'flex-start',
                                                marginBottom: 13
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 33,
                                                        height: 33,
                                                        background: 'rgba(255,184,0,.08)',
                                                        border: '1px solid rgba(255,184,0,.2)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: 14,
                                                        flexShrink: 0
                                                    },
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 'clamp(6px,1.3vw,8px)',
                                                                letterSpacing: '0.16em',
                                                                textTransform: 'uppercase',
                                                                color: '#2a3050',
                                                                marginBottom: 3,
                                                                fontFamily: 'JetBrains Mono,monospace'
                                                            },
                                                            children: item.lbl
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 'clamp(12px,1.8vw,13px)',
                                                                color: '#EFF3FF'
                                                            },
                                                            children: item.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 494,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            margin: '18px 0 24px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Activity%20Camp%202026.",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                background: '#FFB800',
                                                color: '#000507',
                                                fontFamily: 'JetBrains Mono,monospace',
                                                fontSize: 'clamp(8px,1.6vw,9px)',
                                                fontWeight: 700,
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                padding: 'clamp(11px,2.5vw,13px) clamp(18px,3.5vw,24px)',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 7,
                                                textDecoration: 'none'
                                            },
                                            children: "💬 WhatsApp Us Now"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid rgba(255,255,255,.06)',
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7634729636504!2d77.00880147461548!3d8.401381991642408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf7adf9c3d3%3A0x13ead778b1e2bc93!2sMalayinkeezhu%2C%20Kerala%20695571!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
                                            style: {
                                                display: 'block',
                                                width: '100%',
                                                height: 190,
                                                filter: 'invert(.9) hue-rotate(180deg) saturate(.6)',
                                                border: 'none'
                                            },
                                            allowFullScreen: true,
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer-when-downgrade",
                                            title: "Oxford Computers map"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: '55vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 'clamp(56px,9vw,80px) clamp(20px,5vw,48px)',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#080d18'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse at 50% 60%,rgba(255,184,0,.08) 0%,transparent 60%)',
                            animation: 'ctaP 4s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sl",
                                    style: {
                                        marginBottom: 18
                                    },
                                    children: "🚀 2026 Batch · Limited Seats"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: 'Syne,sans-serif',
                                        fontWeight: 800,
                                        fontSize: 'clamp(38px,9.5vw,100px)',
                                        lineHeight: .88,
                                        letterSpacing: '-0.04em',
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'block',
                                                color: '#EFF3FF'
                                            },
                                            children: "Your AI"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'block',
                                                color: '#FFB800'
                                            },
                                            children: "Future Starts"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 525,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'block',
                                                color: 'transparent',
                                                WebkitTextStroke: '1px rgba(239,243,255,.14)'
                                            },
                                            children: "This Summer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'DM Serif Display,serif',
                                        fontStyle: 'italic',
                                        fontSize: 'clamp(14px,2.8vw,19px)',
                                        color: 'rgba(239,243,255,.38)',
                                        marginBottom: 32
                                    },
                                    children: "25 days. Real projects. Government certificate. Trivandrum, Kerala."
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-btns",
                                    style: {
                                        display: 'flex',
                                        gap: 10,
                                        justifyContent: 'center',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#ac-register",
                                            onClick: scrollTo('ac-register'),
                                            style: {
                                                background: '#FFB800',
                                                color: '#000507',
                                                fontFamily: 'JetBrains Mono,monospace',
                                                fontSize: 'clamp(9px,1.8vw,10px)',
                                                fontWeight: 700,
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)',
                                                textDecoration: 'none'
                                            },
                                            children: "Apply for 2026 Camp →"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+919447329972",
                                            style: {
                                                background: 'transparent',
                                                color: '#EFF3FF',
                                                fontFamily: 'JetBrains Mono,monospace',
                                                fontSize: 'clamp(9px,1.8vw,10px)',
                                                fontWeight: 700,
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                padding: 'clamp(13px,2.5vw,17px) clamp(24px,5vw,40px)',
                                                border: '1px solid #2a3050',
                                                textDecoration: 'none'
                                            },
                                            children: "📞 Call Us Now"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActivityCampSection.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    background: '#000507',
                    borderTop: '1px solid rgba(255,255,255,.05)',
                    padding: 'clamp(36px,7vw,52px) clamp(20px,5vw,52px) clamp(20px,4vw,28px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gf",
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto 36px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/logo-main.png",
                                        alt: "The Oxford Computers Logo",
                                        style: {
                                            height: 'clamp(38px, 6vw, 48px)',
                                            marginBottom: 16,
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 541,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Serif Display,serif',
                                            fontStyle: 'italic',
                                            fontSize: 'clamp(12px,1.8vw,14px)',
                                            lineHeight: 1.65,
                                            color: 'rgba(239,243,255,.35)',
                                            maxWidth: 240
                                        },
                                        children: "Kerala State Rutronix-approved AI & computer education institute. Transforming students into tech professionals since 1995."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 540,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 'clamp(7px,1.3vw,8px)',
                                            letterSpacing: '0.25em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 14,
                                            display: 'block',
                                            fontFamily: 'JetBrains Mono,monospace'
                                        },
                                        children: "AI Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 545,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        'AI Digital Marketing',
                                        'AI Office Suite',
                                        'AI Web App Dev',
                                        'Junior YouTuber',
                                        'AI Prompt Engineer',
                                        'AI Designer'
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            onClick: ()=>document.getElementById('ac-courses')?.scrollIntoView({
                                                    behavior: 'smooth'
                                                }),
                                            style: {
                                                display: 'block',
                                                fontSize: 'clamp(10px,1.8vw,12px)',
                                                color: 'rgba(239,243,255,.35)',
                                                marginBottom: 7,
                                                cursor: 'pointer'
                                            },
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 547,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 544,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 'clamp(7px,1.3vw,8px)',
                                            letterSpacing: '0.25em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 14,
                                            display: 'block',
                                            fontFamily: 'JetBrains Mono,monospace'
                                        },
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        [
                                            'Home',
                                            'https://theoxfordedu.com'
                                        ],
                                        [
                                            'All Courses',
                                            'https://theoxfordedu.com/course'
                                        ],
                                        [
                                            'About Us',
                                            'https://theoxfordedu.com/about'
                                        ],
                                        [
                                            'Contact',
                                            'https://theoxfordedu.com/contact'
                                        ]
                                    ].map(([l, h])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: h,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                display: 'block',
                                                fontSize: 'clamp(10px,1.8vw,12px)',
                                                color: 'rgba(239,243,255,.35)',
                                                marginBottom: 7,
                                                textDecoration: 'none'
                                            },
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 'clamp(7px,1.3vw,8px)',
                                            letterSpacing: '0.25em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 14,
                                            display: 'block',
                                            fontFamily: 'JetBrains Mono,monospace'
                                        },
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 557,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+919447329972",
                                        style: {
                                            display: 'block',
                                            fontSize: 'clamp(10px,1.8vw,12px)',
                                            color: 'rgba(239,243,255,.35)',
                                            marginBottom: 7,
                                            textDecoration: 'none'
                                        },
                                        children: "+91 94473 29972"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 558,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:t.005.rutronix@gmail.com",
                                        style: {
                                            display: 'block',
                                            fontSize: 'clamp(10px,1.8vw,12px)',
                                            color: 'rgba(239,243,255,.35)',
                                            marginBottom: 7,
                                            textDecoration: 'none',
                                            wordBreak: 'break-all'
                                        },
                                        children: "t.005.rutronix@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 559,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            fontSize: 'clamp(10px,1.8vw,12px)',
                                            color: 'rgba(239,243,255,.35)',
                                            marginBottom: 7
                                        },
                                        children: "Malayinkeezhu, Trivandrum"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/919447329972",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            display: 'block',
                                            fontSize: 'clamp(10px,1.8vw,12px)',
                                            color: '#FFB800',
                                            textDecoration: 'none'
                                        },
                                        children: "💬 WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,.04)',
                            paddingTop: 18,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 10,
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 'clamp(7px,1.3vw,8px)',
                                    letterSpacing: '0.1em',
                                    color: '#2a3050',
                                    textTransform: 'uppercase',
                                    fontFamily: 'JetBrains Mono,monospace'
                                },
                                children: "© 2026 The Oxford Computers · Kerala State Rutronix Approved"
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 10
                                },
                                children: [
                                    [
                                        'f',
                                        'https://www.facebook.com/oxfordtvm'
                                    ],
                                    [
                                        'in',
                                        'https://www.instagram.com/oxfordmkl'
                                    ],
                                    [
                                        'w',
                                        'https://wa.me/919447329972'
                                    ]
                                ].map(([l, h])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: h,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            width: 30,
                                            height: 30,
                                            border: '1px solid rgba(255,255,255,.07)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 12,
                                            textDecoration: 'none',
                                            color: '#EFF3FF'
                                        },
                                        children: l
                                    }, l, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 566,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s4(ActivityCampSection, "b5kUkbIudXyksI0Csv7JbKXtBjk=");
_c4 = ActivityCampSection;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "FadeIn");
__turbopack_context__.k.register(_c1, "StatCounter");
__turbopack_context__.k.register(_c2, "CourseCard");
__turbopack_context__.k.register(_c3, "FaqItem");
__turbopack_context__.k.register(_c4, "ActivityCampSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_2a3c5bb9._.js.map