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
// ─── Data ────────────────────────────────────────────────────────────────────
const COURSES = [
    {
        idx: '01/09',
        emoji: '📣',
        name: 'AI Digital Marketing',
        color: 'gold',
        age: 'Age 14+ · Class 9 onwards',
        desc: 'Master SEO, Google Ads, social media strategy, and AI copywriting. Run real campaigns and grow audiences using the latest AI marketing tools.',
        skills: [
            'SEO',
            'Google Ads',
            'Social Media AI',
            'Analytics',
            'Email Marketing'
        ]
    },
    {
        idx: '02/09',
        emoji: '💼',
        name: 'AI Office Suite',
        color: 'cyan',
        age: 'Age 13+ · Class 8 onwards',
        desc: 'Supercharge productivity with AI in MS Word, Excel, PowerPoint and email. Automate reports, build smart spreadsheets, and design presentations in minutes.',
        skills: [
            'MS Word AI',
            'Excel AI',
            'PowerPoint AI',
            'Outlook AI',
            'Automation'
        ]
    },
    {
        idx: '03/09',
        emoji: '🌐',
        name: 'AI Web App Development',
        color: 'red',
        age: 'Age 15+ · Class 10 onwards',
        desc: 'Build and deploy real web apps using HTML, CSS, JavaScript and React. AI coding assistants accelerate every step — ship your first live app before camp ends.',
        skills: [
            'HTML/CSS',
            'JavaScript',
            'React',
            'AI Coding',
            'Live Deploy'
        ]
    },
    {
        idx: '04/09',
        emoji: '🎬',
        name: 'Junior YouTuber',
        color: 'green',
        age: 'Age 10+ · Class 5 onwards',
        desc: 'Script, film, edit, and publish. Use AI to create viral video ideas, stunning thumbnails, and grow a real YouTube channel. Perfect for young creators.',
        skills: [
            'Video Scripting',
            'Editing',
            'AI Thumbnails',
            'YouTube SEO',
            'Monetisation'
        ]
    },
    {
        idx: '05/09',
        emoji: '🧠',
        name: 'Junior AI Prompt Engineer',
        color: 'purple',
        age: 'Age 12+ · Class 7 onwards',
        desc: 'Master the art of talking to AI. Learn prompt engineering for ChatGPT, Gemini, Claude and image generators — turn ideas into professional outputs instantly.',
        skills: [
            'Prompt Design',
            'ChatGPT',
            'Gemini',
            'Image Prompts',
            'AI Workflows'
        ]
    },
    {
        idx: '06/09',
        emoji: '🎨',
        name: 'AI Designer',
        color: 'pink',
        age: 'Age 10+ · Class 5 onwards',
        desc: 'No drawing skills needed. Use Canva AI, Midjourney, and Adobe Firefly to design logos, posters, social media graphics and full brand identities.',
        skills: [
            'Canva AI',
            'Midjourney',
            'Adobe Firefly',
            'Logo Design',
            'Brand Identity'
        ]
    },
    {
        idx: '07/09',
        emoji: '🐍',
        name: 'Junior Python Programmer',
        color: 'gold',
        age: 'Age 13+ · Class 8 onwards',
        desc: 'Learn the world\'s most popular AI language from scratch. Write real Python scripts, build mini-apps, automate tasks, and understand the code behind AI tools.',
        skills: [
            'Python Basics',
            'Variables & Loops',
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
        age: 'Age 12+ · Class 7 onwards',
        desc: 'Design and build your own 2D games using beginner-friendly tools and AI assistance. Share your game with friends before camp ends!',
        skills: [
            'Game Design',
            '2D Development',
            'Scratch / Unity',
            'AI Characters',
            'Publish & Share'
        ]
    },
    {
        idx: '09/09',
        emoji: '🤖',
        name: 'Generative AI & ChatGPT',
        color: 'red',
        age: 'Age 14+ · Class 9 onwards',
        desc: 'Master the most powerful AI tools of our era. Create text, images, code, and audio using ChatGPT, DALL·E, Sora, and more. Build AI workflows that work 24/7.',
        skills: [
            'ChatGPT Pro',
            'DALL·E Image Gen',
            'Prompt Mastery',
            'AI Workflows',
            'Content Creation'
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
        label: '% Placement Rate',
        color: '#B47FFF',
        suffix: '%'
    }
];
const WHY_ITEMS = [
    {
        num: '01',
        title: 'Kerala State Rutronix Approved',
        body: 'Government-recognised certification. Your Oxford certificate is valid across Kerala, India, and accepted in government job applications and higher education.'
    },
    {
        num: '02',
        title: '5000+ Students Trained',
        body: 'Over a decade of quality computer education in Malayinkeezhu. Our alumni work in IT companies, run businesses, and hold government positions across Kerala.'
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
        body: 'Career guidance, resume building, and placement assistance included. Our 95% placement rate speaks for itself — we invest in your success beyond the classroom.'
    }
];
const TIMELINE = [
    {
        dot: '🚀',
        day: 'Days 1–5 · Week 1',
        title: 'Foundation & AI Tool Onboarding',
        body: 'Orientation, tool setup, and skill baseline assessment. Get introduced to 14+ AI tools curated for your course. Build your first mini-project with trainer guidance.'
    },
    {
        dot: '⚙️',
        day: 'Days 6–12 · Week 2',
        title: 'Core Skills Development',
        body: 'Deep-dive into course-specific tools and techniques. Work on structured assignments daily. Peer learning, trainer feedback sessions, and skill assessments every Friday.'
    },
    {
        dot: '🛠️',
        day: 'Days 13–19 · Week 3',
        title: 'Real-World Project Build',
        body: 'Apply everything learned to build your major project — a real website, marketing campaign, YouTube channel, AI design portfolio, or prompt engineering workbook.'
    },
    {
        dot: '🎯',
        day: 'Days 20–24 · Week 4',
        title: 'Project Polish & Presentation',
        body: 'Refine your project with trainer mentorship. Prepare your project presentation for the final day showcase. Career guidance, resume tips, and alumni networking session.'
    },
    {
        dot: '🏅',
        day: 'Day 25 · Grand Finale',
        title: 'Certificate Ceremony & Showcase',
        body: 'Present your project to parents, trainers, and guests. Receive your Kerala State Rutronix Government Certificate. Celebrate your transformation from student to AI creator.'
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
        quote: '"My daughter attended the Junior YouTuber course. She now has 800 subscribers and posts regularly. The trainers were patient and explained everything in Malayalam. Highly recommended."',
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
        a: 'Yes. The Oxford Computers is a Kerala State Rutronix-approved institute. The certificate is government-certified and nationally recognised — valid for government job applications and higher education admissions across Kerala.'
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
        a: 'Both. Trainers are fluent in Malayalam and English. Most classes are conducted bilingually so every student understands fully. Study materials are in English with Malayalam explanations during class.'
    },
    {
        q: 'How do I register for the 2026 batch?',
        a: 'Fill the registration form below, call/WhatsApp +91 94473 29972, or visit The Oxford Computers at Malayinkeezhu, Trivandrum — 695571. Seats are limited; early registration is strongly recommended.'
    }
];
const SHEET_URL = 'https://script.google.com/macros/s/AKfycby8hn6MU0dRGPFcFPYSNM4sKj8xV0Zf6ilSIojIEVhJzUt8TmPU1q18Zoy-dM8eGTgB/exec';
// ─── Color maps ───────────────────────────────────────────────────────────────
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
// ─── Micro-components ─────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-60px'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: className,
        initial: {
            opacity: 0,
            y: 40
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.8,
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
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(FadeIn, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FadeIn;
function SectionLabel({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: 9,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#00E5FF',
            display: 'block',
            marginBottom: 16,
            fontFamily: 'JetBrains Mono, monospace'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 86,
        columnNumber: 10
    }, this);
}
_c1 = SectionLabel;
function SectionTitle({ children, style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        style: {
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(36px,5.5vw,72px)',
            lineHeight: 0.96,
            marginBottom: 24,
            color: '#EFF3FF',
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
_c2 = SectionTitle;
function Gold({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            color: '#FFB800'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, this);
}
_c3 = Gold;
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
            let start = 0;
            const step = {
                "StatCounter.useEffect.step": ()=>{
                    start += Math.ceil(target / 60);
                    if (start >= target) {
                        setCount(target);
                        return;
                    }
                    setCount(start);
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
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(36px,5vw,60px)',
            lineHeight: 1,
            color,
            marginBottom: 8
        },
        children: [
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s1(StatCounter, "Ness7Bk+ak2NO8b+kFuWz5Za+RQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c4 = StatCounter;
function CourseCard({ course, index }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const col = C[course.color];
    const bdr = CBORDER[course.color];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        onClick: ()=>document.getElementById('ac-register')?.scrollIntoView({
                behavior: 'smooth'
            }),
        initial: {
            opacity: 0,
            y: 80
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: '-40px'
        },
        transition: {
            duration: 0.7,
            delay: index % 3 * 0.1,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        style: {
            padding: '48px 40px',
            background: hovered ? 'rgba(3,6,15,.95)' : 'rgba(3,6,15,.6)',
            border: `1px solid ${hovered ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.05)'}`,
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)'
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
                    transition: 'transform 0.5s ease'
                }
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 220,
                    height: 220,
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    top: -60,
                    right: -60,
                    background: col,
                    opacity: hovered ? 0.18 : 0,
                    transition: 'opacity 0.5s',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: '#2a3050',
                    marginBottom: 20,
                    fontFamily: 'JetBrains Mono, monospace'
                },
                children: course.idx
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 52,
                    marginBottom: 20,
                    display: 'block',
                    lineHeight: 1
                },
                children: course.emoji
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 22,
                    lineHeight: 1.1,
                    marginBottom: 14,
                    color: col
                },
                children: course.name
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 8,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    border: `1px solid ${bdr}`,
                    color: col,
                    display: 'inline-block',
                    marginBottom: 20,
                    fontFamily: 'JetBrains Mono, monospace'
                },
                children: course.age
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'DM Serif Display, serif',
                    fontStyle: 'italic',
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: 'rgba(239,243,255,.48)',
                    marginBottom: 24
                },
                children: course.desc
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 28
                },
                children: course.skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 7,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            padding: '4px 9px',
                            background: 'rgba(255,255,255,.03)',
                            border: '1px solid rgba(255,255,255,.06)',
                            color: '#2a3050',
                            fontFamily: 'JetBrains Mono, monospace'
                        },
                        children: s
                    }, s, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 14,
                    color: col,
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s',
                    display: 'block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700
                },
                children: "→ Enroll Now"
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s2(CourseCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c5 = CourseCard;
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
                    padding: '24px 0',
                    cursor: 'pointer',
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: 700,
                            fontSize: 16,
                            color: '#EFF3FF',
                            lineHeight: 1.3
                        },
                        children: q
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 28,
                            height: 28,
                            border: `1px solid ${open ? '#FFB800' : 'rgba(255,255,255,.1)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            background: open ? '#FFB800' : 'transparent',
                            color: open ? '#000507' : '#2a3050',
                            transform: open ? 'rotate(45deg)' : 'none',
                            transition: 'all 0.3s',
                            fontSize: 14
                        },
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    height: open ? 'auto' : 0,
                    opacity: open ? 1 : 0
                },
                initial: false,
                transition: {
                    duration: 0.35
                },
                style: {
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: 'DM Serif Display, serif',
                        fontStyle: 'italic',
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: 'rgba(239,243,255,.5)',
                        paddingBottom: 24
                    },
                    children: a
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s3(FaqItem, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c6 = FaqItem;
function ActivityCampSection() {
    _s4();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        studentClass: '',
        course: '',
        location: '',
        message: ''
    });
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        d: '--',
        h: '--',
        m: '--',
        s: '--'
    });
    // Countdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActivityCampSection.useEffect": ()=>{
            const campStart = new Date('2026-04-01T00:00:00+05:30').getTime();
            const tick = {
                "ActivityCampSection.useEffect.tick": ()=>{
                    const diff = campStart - Date.now();
                    if (diff <= 0) {
                        setCountdown({
                            d: '00',
                            h: '00',
                            m: '00',
                            s: '00'
                        });
                        return;
                    }
                    setCountdown({
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
        setTimeout(()=>setToast(null), 4500);
    };
    const handleSubmit = async ()=>{
        if (!formData.name || !formData.phone || !formData.course) {
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
                    ...formData
                })
            });
            showToast('✓ Application Received! We will call you soon.', true);
            setFormData({
                name: '',
                phone: '',
                studentClass: '',
                course: '',
                location: '',
                message: ''
            });
        } catch  {
            showToast('✓ Received! But check your connection.', true);
        }
        setSending(false);
    };
    const inputStyle = {
        width: '100%',
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.07)',
        padding: '14px 18px',
        color: '#EFF3FF',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 13,
        outline: 'none',
        transition: 'border-color 0.3s'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#000507',
            color: '#EFF3FF',
            fontFamily: 'JetBrains Mono, monospace',
            overflowX: 'hidden'
        },
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: 32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: toast.ok ? '#00FF9D' : '#FF3860',
                    color: '#000507',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '16px 32px',
                    zIndex: 9999,
                    borderRadius: 0,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                },
                children: toast.msg
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Vacation%20Activity%20Camp%202026.",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    position: 'fixed',
                    bottom: 28,
                    right: 28,
                    zIndex: 8500,
                    width: 58,
                    height: 58,
                    background: '#25D366',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(37,211,102,.4)',
                    textDecoration: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    style: {
                        width: 28,
                        height: 28,
                        fill: '#fff'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 246,
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
                    padding: '120px 48px 80px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'linear-gradient(rgba(0,229,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.025) 1px,transparent 1px)',
                            backgroundSize: '64px 64px',
                            animation: 'gridDrift 25s linear infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            width: 800,
                            height: 800,
                            background: 'radial-gradient(circle,rgba(255,184,0,.09) 0%,transparent 70%)',
                            borderRadius: '50%',
                            top: '40%',
                            left: '30%',
                            transform: 'translate(-50%,-50%)',
                            animation: 'breathe 6s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            width: 600,
                            height: 600,
                            background: 'radial-gradient(circle,rgba(0,229,255,.07) 0%,transparent 70%)',
                            borderRadius: '50%',
                            top: '60%',
                            left: '70%',
                            transform: 'translate(-50%,-50%)',
                            animation: 'breathe 8s ease-in-out infinite reverse'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;700&display=swap');
          @keyframes gridDrift{to{background-position:64px 64px,64px 64px;}}
          @keyframes breathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.2)}}
          @keyframes tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
          @keyframes ctaGlow{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
          @keyframes shDot{0%,100%{transform:translateY(0);opacity:1}70%{transform:translateY(9px);opacity:0}}
          * { box-sizing: border-box; }
        `
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            zIndex: 2,
                            maxWidth: 1000
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    y: 32
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .3,
                                    duration: .9
                                },
                                style: {
                                    fontSize: 9,
                                    letterSpacing: '0.42em',
                                    textTransform: 'uppercase',
                                    color: '#00E5FF',
                                    marginBottom: 24,
                                    display: 'block'
                                },
                                children: "🌐 Kerala State Rutronix Approved · Vacation Activity Camp"
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 32
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .5,
                                    duration: .9
                                },
                                style: {
                                    display: 'flex',
                                    gap: 10,
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    marginBottom: 32
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
                                            fontSize: 8,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            padding: '6px 14px',
                                            border: `1px solid ${c}`,
                                            color: c,
                                            fontFamily: 'JetBrains Mono, monospace'
                                        },
                                        children: l
                                    }, l, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 276,
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
                                    duration: 1
                                },
                                style: {
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: 800,
                                    fontSize: 'clamp(48px,10vw,120px)',
                                    lineHeight: .88,
                                    letterSpacing: '-0.04em',
                                    marginBottom: 28
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
                                        lineNumber: 285,
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
                                        lineNumber: 286,
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
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 32
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .95,
                                    duration: .9
                                },
                                style: {
                                    fontFamily: 'DM Serif Display, serif',
                                    fontStyle: 'italic',
                                    fontSize: 'clamp(16px,2.5vw,24px)',
                                    color: 'rgba(239,243,255,.45)',
                                    marginBottom: 16
                                },
                                children: "25 days. 9 AI-powered courses. One life-changing summer."
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1.1,
                                    duration: .9
                                },
                                style: {
                                    fontSize: 9,
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    color: '#2a3050',
                                    marginBottom: 48
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
                                        lineNumber: 297,
                                        columnNumber: 16
                                    }, this),
                                    " · Malayinkeezhu, Trivandrum, Kerala"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 32
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1.25,
                                    duration: .9
                                },
                                style: {
                                    display: 'flex',
                                    gap: 14,
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    marginBottom: 52
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#ac-register",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            document.getElementById('ac-register')?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        },
                                        style: {
                                            background: '#FFB800',
                                            color: '#000507',
                                            fontFamily: 'JetBrains Mono, monospace',
                                            fontSize: 10,
                                            fontWeight: 700,
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            padding: '18px 44px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 8
                                        },
                                        children: "Apply for 2026 Batch →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#ac-courses",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            document.getElementById('ac-courses')?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        },
                                        style: {
                                            background: 'transparent',
                                            color: '#EFF3FF',
                                            fontFamily: 'JetBrains Mono, monospace',
                                            fontSize: 10,
                                            fontWeight: 700,
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            padding: '18px 44px',
                                            border: '1px solid #2a3050',
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 8
                                        },
                                        children: "View All 9 Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 32
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1.5,
                                    duration: .9
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 8,
                                            letterSpacing: '0.3em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 14
                                        },
                                        children: "Camp starts soon — secure your seat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 12,
                                            justifyContent: 'center',
                                            flexWrap: 'wrap'
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
                                        ].map(([k, unit], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'Syne, sans-serif',
                                                            fontWeight: 800,
                                                            fontSize: 28,
                                                            color: '#2a3050',
                                                            alignSelf: 'flex-start',
                                                            marginTop: 4
                                                        },
                                                        children: ":"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 72,
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Syne, sans-serif',
                                                                    fontWeight: 800,
                                                                    fontSize: 36,
                                                                    color: '#FFB800',
                                                                    lineHeight: 1,
                                                                    display: 'block'
                                                                },
                                                                children: countdown[k]
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 7,
                                                                    letterSpacing: '0.2em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#2a3050',
                                                                    marginTop: 4,
                                                                    display: 'block'
                                                                },
                                                                children: unit
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, k, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#FFB800',
                    overflow: 'hidden',
                    padding: '14px 0'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        animation: 'tick 32s linear infinite',
                        whiteSpace: 'nowrap'
                    },
                    children: [
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
                        'Kerala Rutronix Approved',
                        'Malayinkeezhu Trivandrum',
                        'Real Certificates',
                        'School & College Students',
                        '2026 Batch',
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
                        'Kerala Rutronix Approved',
                        'Malayinkeezhu Trivandrum',
                        'Real Certificates',
                        'School & College Students',
                        '2026 Batch'
                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: 800,
                                fontSize: 11,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: '#000507',
                                padding: '0 32px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                flexShrink: 0
                            },
                            children: [
                                t,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 7
                                    },
                                    children: "★"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 336,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/ActivityCampSection.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: '#080d18',
                    borderTop: '1px solid rgba(255,255,255,.04)',
                    borderBottom: '1px solid rgba(255,255,255,.04)',
                    padding: '56px 56px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        gap: 2,
                        maxWidth: 1200,
                        margin: '0 auto'
                    },
                    children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                            delay: i * 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '40px 36px',
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
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 8,
                                            letterSpacing: '0.22em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050'
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 347,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/ActivityCampSection.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ActivityCampSection.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "ac-courses",
                style: {
                    padding: '120px 56px',
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
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto 80px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                            children: "Nine AI Courses · Pick Your Passion"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 361,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                        delay: 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                            children: [
                                                "The ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gold, {
                                                    children: "2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 51
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 68
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
                                                    lineNumber: 362,
                                                    columnNumber: 80
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 362,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'DM Serif Display, serif',
                                        fontStyle: 'italic',
                                        fontSize: 17,
                                        color: 'rgba(239,243,255,.4)',
                                        maxWidth: 380
                                    },
                                    children: "Choose any one course for your 25-day journey — or discuss combinations with our counsellors."
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 364,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1200,
                                margin: '0 auto 60px',
                                padding: '0 0px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg,rgba(255,184,0,.08) 0%,rgba(0,229,255,.06) 50%,rgba(180,127,255,.08) 100%)',
                                    border: '1px solid rgba(255,184,0,.25)',
                                    padding: '40px 48px',
                                    position: 'relative',
                                    overflow: 'hidden'
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
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 24,
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 48,
                                                    lineHeight: 1
                                                },
                                                children: "🏛️"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 260
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 12,
                                                            flexWrap: 'wrap',
                                                            marginBottom: 14
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.3em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#FFB800',
                                                                    background: 'rgba(255,184,0,.12)',
                                                                    border: '1px solid rgba(255,184,0,.3)',
                                                                    padding: '4px 12px',
                                                                    fontFamily: 'JetBrains Mono, monospace'
                                                                },
                                                                children: "Kerala State Rutronix Initiative"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.2em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#00E5FF',
                                                                    background: 'rgba(0,229,255,.1)',
                                                                    border: '1px solid rgba(0,229,255,.25)',
                                                                    padding: '4px 12px',
                                                                    fontFamily: 'JetBrains Mono, monospace'
                                                                },
                                                                children: "🤖 14+ AI Tools Included"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: 'Syne, sans-serif',
                                                            fontWeight: 800,
                                                            fontSize: 'clamp(20px,3.5vw,34px)',
                                                            lineHeight: 1.1,
                                                            marginBottom: 14,
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
                                                                lineNumber: 380,
                                                                columnNumber: 44
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'DM Serif Display, serif',
                                                            fontStyle: 'italic',
                                                            fontSize: 17,
                                                            lineHeight: 1.7,
                                                            color: 'rgba(239,243,255,.65)',
                                                            marginBottom: 20
                                                        },
                                                        children: [
                                                            "Kerala State Rutronix is bringing you ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: '#EFF3FF',
                                                                    fontStyle: 'normal'
                                                                },
                                                                children: '"AI Education for All"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 59
                                                            }, this),
                                                            " — along with your chosen course, you get to explore ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: '#FFB800',
                                                                    fontStyle: 'normal'
                                                                },
                                                                children: "14+ powerful AI tools"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 199
                                                            }, this),
                                                            " to supercharge your learning."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: 8
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
                                                                '+ 8 More Tools',
                                                                'rgba(239,243,255,.6)'
                                                            ]
                                                        ].map(([t, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.15em',
                                                                    textTransform: 'uppercase',
                                                                    padding: '5px 12px',
                                                                    border: `1px solid ${c}40`,
                                                                    color: c,
                                                                    fontFamily: 'JetBrains Mono, monospace'
                                                                },
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ActivityCampSection.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3,1fr)',
                            gap: 2
                        },
                        children: COURSES.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCard, {
                                course: c,
                                index: i
                            }, i, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 397,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '120px 56px',
                    background: '#080d18',
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
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    children: "Eligibility"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 405,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                    children: [
                                        "Who Can ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gold, {
                                            children: "Join?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 406,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 406,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'DM Serif Display, serif',
                                        fontStyle: 'italic',
                                        fontSize: 18,
                                        lineHeight: 1.7,
                                        color: 'rgba(239,243,255,.5)',
                                        maxWidth: 560
                                    },
                                    children: "This camp is built for young minds at every level. No prior computer knowledge required — just curiosity and the willingness to learn."
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 407,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '60px auto 0',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3,1fr)',
                            gap: 20
                        },
                        children: [
                            {
                                icon: '🏫',
                                title: 'School Students',
                                body: 'Class 5 to Class 12. Both Malayalam and English medium students are welcome. Separate junior (Class 5–8) and senior (Class 9–12) batches ensure the right learning pace.',
                                accent: '#FFB800'
                            },
                            {
                                icon: '🎓',
                                title: 'College Students',
                                body: 'Degree, Diploma, and Plus Two students. Vacation time is the perfect opportunity to gain AI skills that your course doesn\'t teach — and your future employer will value.',
                                accent: '#00E5FF'
                            },
                            {
                                icon: '👩‍💻',
                                title: 'Beginners Welcome',
                                body: 'Zero computer knowledge needed. Our trainers start from basics and guide every student through real projects at their own pace, in both Malayalam and English.',
                                accent: '#00FF9D'
                            }
                        ].map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: i * 0.15,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '40px 32px',
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
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 44,
                                                marginBottom: 20,
                                                display: 'block'
                                            },
                                            children: card.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: 'Syne, sans-serif',
                                                fontWeight: 800,
                                                fontSize: 22,
                                                color: '#EFF3FF',
                                                marginBottom: 12
                                            },
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'DM Serif Display, serif',
                                                fontStyle: 'italic',
                                                fontSize: 16,
                                                lineHeight: 1.65,
                                                color: 'rgba(239,243,255,.5)'
                                            },
                                            children: card.body
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '120px 56px',
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
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    children: "Our Advantage"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 431,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                    children: [
                                        "Why Choose ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gold, {
                                            children: "Oxford?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 432,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 432,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '60px auto 0',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 60,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: WHY_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                        delay: i * 0.12,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 20,
                                                padding: '28px 0',
                                                borderBottom: i < WHY_ITEMS.length - 1 ? '1px solid rgba(255,255,255,.04)' : 'none',
                                                alignItems: 'flex-start'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'Syne, sans-serif',
                                                        fontWeight: 800,
                                                        fontSize: 13,
                                                        color: '#FFB800',
                                                        minWidth: 28,
                                                        marginTop: 2
                                                    },
                                                    children: item.num
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: 'Syne, sans-serif',
                                                                fontWeight: 800,
                                                                fontSize: 18,
                                                                color: '#EFF3FF',
                                                                marginBottom: 8
                                                            },
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: 'DM Serif Display, serif',
                                                                fontStyle: 'italic',
                                                                fontSize: 15,
                                                                lineHeight: 1.65,
                                                                color: 'rgba(239,243,255,.45)'
                                                            },
                                                            children: item.body
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
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
                                        gap: 20,
                                        position: 'relative',
                                        overflow: 'hidden'
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
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 96,
                                                position: 'relative',
                                                zIndex: 2
                                            },
                                            children: "🏛️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                border: '1px solid rgba(255,184,0,.3)',
                                                padding: '16px 28px',
                                                textAlign: 'center',
                                                position: 'relative',
                                                zIndex: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'Syne, sans-serif',
                                                        fontWeight: 800,
                                                        fontSize: 14,
                                                        color: '#FFB800',
                                                        letterSpacing: '0.1em',
                                                        marginBottom: 6
                                                    },
                                                    children: "GOVERNMENT CERTIFIED"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 9,
                                                        letterSpacing: '0.15em',
                                                        textTransform: 'uppercase',
                                                        color: '#2a3050'
                                                    },
                                                    children: "Kerala State Rutronix Approved"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#FFB800',
                                                fontSize: 16,
                                                letterSpacing: 4,
                                                position: 'relative',
                                                zIndex: 2
                                            },
                                            children: "★★★★★"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 456,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 448,
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
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '120px 56px',
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
                        lineNumber: 464,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    children: "25-Day Journey"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 466,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                    children: [
                                        "Camp ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gold, {
                                            children: "Schedule"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 467,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 467,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 900,
                            margin: '60px auto 0',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: 28,
                                    top: 0,
                                    bottom: 0,
                                    width: 1,
                                    background: 'linear-gradient(to bottom,#FFB800,#00E5FF,#00FF9D,#B47FFF)',
                                    opacity: .3
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            TIMELINE.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                    delay: i * 0.16,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 40,
                                            marginBottom: 52,
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 56,
                                                    height: 56,
                                                    background: 'rgba(3,6,15,.8)',
                                                    border: '1px solid rgba(255,184,0,.3)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: 22,
                                                    flexShrink: 0,
                                                    position: 'relative',
                                                    zIndex: 2
                                                },
                                                children: item.dot
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 474,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingTop: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 8,
                                                            letterSpacing: '0.25em',
                                                            textTransform: 'uppercase',
                                                            color: '#FFB800',
                                                            marginBottom: 8,
                                                            fontFamily: 'JetBrains Mono, monospace'
                                                        },
                                                        children: item.day
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: 'Syne, sans-serif',
                                                            fontWeight: 800,
                                                            fontSize: 20,
                                                            color: '#EFF3FF',
                                                            marginBottom: 8
                                                        },
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'DM Serif Display, serif',
                                                            fontStyle: 'italic',
                                                            fontSize: 15,
                                                            lineHeight: 1.65,
                                                            color: 'rgba(239,243,255,.45)'
                                                        },
                                                        children: item.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 475,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 473,
                                        columnNumber: 15
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '120px 56px',
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
                            background: 'linear-gradient(90deg,transparent,#FF6EBF,transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    children: "Student Success"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 490,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                    children: [
                                        "What Our ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gold, {
                                            children: "Students Say"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 491,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 491,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '60px auto 0',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3,1fr)',
                            gap: 20
                        },
                        children: TESTIMONIALS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: i * 0.15,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '40px 32px',
                                        background: 'rgba(3,6,15,.6)',
                                        border: '1px solid rgba(255,255,255,.05)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#FFB800',
                                                fontSize: 12,
                                                letterSpacing: 3,
                                                marginBottom: 18
                                            },
                                            children: '★'.repeat(t.stars)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'DM Serif Display, serif',
                                                fontStyle: 'italic',
                                                fontSize: 16,
                                                lineHeight: 1.75,
                                                color: 'rgba(239,243,255,.6)',
                                                marginBottom: 24
                                            },
                                            children: t.quote
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 498,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 14
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 40,
                                                        height: 40,
                                                        background: 'rgba(255,184,0,.12)',
                                                        border: '1px solid rgba(255,184,0,.25)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: 18,
                                                        flexShrink: 0
                                                    },
                                                    children: t.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: 'Syne, sans-serif',
                                                                fontWeight: 700,
                                                                fontSize: 12,
                                                                color: '#EFF3FF'
                                                            },
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 8,
                                                                letterSpacing: '0.12em',
                                                                textTransform: 'uppercase',
                                                                color: '#2a3050',
                                                                fontFamily: 'JetBrains Mono, monospace'
                                                            },
                                                            children: t.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 495,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '120px 56px',
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
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    children: "FAQs"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 516,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                    children: [
                                        "Common ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gold, {
                                            children: "Questions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 517,
                                            columnNumber: 52
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 517,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 800,
                            margin: '60px auto 0'
                        },
                        children: FAQS.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: i * 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                    q: faq.q,
                                    a: faq.a
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "ac-register",
                style: {
                    padding: '120px 56px',
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
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse at 50% 60%,rgba(0,229,255,.06) 0%,transparent 65%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1100,
                            margin: '0 auto',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 80,
                            alignItems: 'start',
                            position: 'relative',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                        children: "Register Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                        children: [
                                            "Apply for",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 536,
                                                columnNumber: 36
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gold, {
                                                children: "2026 Batch"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 536,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Serif Display, serif',
                                            fontStyle: 'italic',
                                            fontSize: 18,
                                            lineHeight: 1.7,
                                            color: 'rgba(239,243,255,.5)'
                                        },
                                        children: "Seats are limited. Fill the form and our team will call you within 24 hours to confirm your spot."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 40
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 1fr',
                                                    gap: 16,
                                                    marginBottom: 20
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.22em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#2a3050',
                                                                    display: 'block',
                                                                    marginBottom: 8,
                                                                    fontFamily: 'JetBrains Mono, monospace'
                                                                },
                                                                children: "Student Name *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                style: inputStyle,
                                                                type: "text",
                                                                placeholder: "Full name",
                                                                value: formData.name,
                                                                onChange: (e)=>setFormData((p)=>({
                                                                            ...p,
                                                                            name: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.22em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#2a3050',
                                                                    display: 'block',
                                                                    marginBottom: 8,
                                                                    fontFamily: 'JetBrains Mono, monospace'
                                                                },
                                                                children: "WhatsApp Number *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                style: inputStyle,
                                                                type: "tel",
                                                                placeholder: "+91 XXXXX XXXXX",
                                                                value: formData.phone,
                                                                onChange: (e)=>setFormData((p)=>({
                                                                            ...p,
                                                                            phone: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 539,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 1fr',
                                                    gap: 16,
                                                    marginBottom: 20
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.22em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#2a3050',
                                                                    display: 'block',
                                                                    marginBottom: 8,
                                                                    fontFamily: 'JetBrains Mono, monospace'
                                                                },
                                                                children: "Class / Course Year"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                style: inputStyle,
                                                                type: "text",
                                                                placeholder: "e.g. Class 10 / B.Com 2nd year",
                                                                value: formData.studentClass,
                                                                onChange: (e)=>setFormData((p)=>({
                                                                            ...p,
                                                                            studentClass: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    letterSpacing: '0.22em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#2a3050',
                                                                    display: 'block',
                                                                    marginBottom: 8,
                                                                    fontFamily: 'JetBrains Mono, monospace'
                                                                },
                                                                children: "Preferred AI Course *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                style: {
                                                                    ...inputStyle,
                                                                    appearance: 'none'
                                                                },
                                                                value: formData.course,
                                                                onChange: (e)=>setFormData((p)=>({
                                                                            ...p,
                                                                            course: e.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select a course"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 557,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "AI Digital Marketing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "AI Office Suite"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "AI Web App Development"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Junior YouTuber"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Junior AI Prompt Engineer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 562,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "AI Designer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 563,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Junior Python Programmer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 564,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Junior Game Developer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 565,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Generative AI & ChatGPT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 566,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Not decided yet — please advise"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 567,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 549,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 20
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: 8,
                                                            letterSpacing: '0.22em',
                                                            textTransform: 'uppercase',
                                                            color: '#2a3050',
                                                            display: 'block',
                                                            marginBottom: 8,
                                                            fontFamily: 'JetBrains Mono, monospace'
                                                        },
                                                        children: "Your Location / Area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: inputStyle,
                                                        type: "text",
                                                        placeholder: "e.g. Neyyattinkara, Attingal, Trivandrum",
                                                        value: formData.location,
                                                        onChange: (e)=>setFormData((p)=>({
                                                                    ...p,
                                                                    location: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 571,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 20
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: 8,
                                                            letterSpacing: '0.22em',
                                                            textTransform: 'uppercase',
                                                            color: '#2a3050',
                                                            display: 'block',
                                                            marginBottom: 8,
                                                            fontFamily: 'JetBrains Mono, monospace'
                                                        },
                                                        children: "Any Questions? (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        style: {
                                                            ...inputStyle,
                                                            resize: 'vertical',
                                                            minHeight: 88
                                                        },
                                                        placeholder: "Fee details, batch timings, course doubts...",
                                                        value: formData.message,
                                                        onChange: (e)=>setFormData((p)=>({
                                                                    ...p,
                                                                    message: e.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 575,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSubmit,
                                                disabled: sending,
                                                style: {
                                                    width: '100%',
                                                    background: '#FFB800',
                                                    color: '#000507',
                                                    fontFamily: 'JetBrains Mono, monospace',
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                    padding: 18,
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    marginTop: 8,
                                                    transition: 'all 0.3s'
                                                },
                                                children: sending ? 'Sending...' : 'Reserve My Seat →'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 579,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 8,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    color: '#2a3050',
                                                    marginTop: 12,
                                                    textAlign: 'center'
                                                },
                                                children: "🔒 Your data is safe. We will never share your information."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 583,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 538,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 534,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeIn, {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        paddingTop: 40
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 48
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'Syne, sans-serif',
                                                        fontWeight: 800,
                                                        fontSize: 18,
                                                        color: '#EFF3FF',
                                                        marginBottom: 20
                                                    },
                                                    children: "Contact Us Directly"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 17
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
                                                            lineNumber: 593,
                                                            columnNumber: 60
                                                        }, this)
                                                    },
                                                    {
                                                        icon: '✉️',
                                                        lbl: 'Email',
                                                        val: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:t.005.rutronix@gmail.com",
                                                            style: {
                                                                color: '#FFB800',
                                                                textDecoration: 'none'
                                                            },
                                                            children: "t.005.rutronix@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 49
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
                                                                    lineNumber: 595,
                                                                    columnNumber: 73
                                                                }, this),
                                                                "Malayinkeezhu, Thiruvananthapuram",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                                    lineNumber: 595,
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
                                                            gap: 16,
                                                            alignItems: 'flex-start',
                                                            marginBottom: 16
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 36,
                                                                    height: 36,
                                                                    background: 'rgba(255,184,0,.08)',
                                                                    border: '1px solid rgba(255,184,0,.2)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontSize: 16,
                                                                    flexShrink: 0
                                                                },
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 599,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 8,
                                                                            letterSpacing: '0.2em',
                                                                            textTransform: 'uppercase',
                                                                            color: '#2a3050',
                                                                            marginBottom: 4,
                                                                            fontFamily: 'JetBrains Mono, monospace'
                                                                        },
                                                                        children: item.lbl
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 13,
                                                                            color: '#EFF3FF'
                                                                        },
                                                                        children: item.val
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                                        lineNumber: 602,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                                lineNumber: 600,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: 20
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://wa.me/919447329972?text=Hi!%20I%20want%20to%20know%20about%20the%20AI%20Vacation%20Activity%20Camp%202026.",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            background: '#FFB800',
                                                            color: '#000507',
                                                            fontFamily: 'JetBrains Mono, monospace',
                                                            fontSize: 9,
                                                            fontWeight: 700,
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase',
                                                            padding: '14px 28px',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 8,
                                                            textDecoration: 'none'
                                                        },
                                                        children: "💬 WhatsApp Us Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
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
                                                    height: 220,
                                                    filter: 'invert(.9) hue-rotate(180deg) saturate(.6)',
                                                    border: 'none'
                                                },
                                                allowFullScreen: true,
                                                loading: "lazy",
                                                referrerPolicy: "no-referrer-when-downgrade",
                                                title: "The Oxford Computers map"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActivityCampSection.tsx",
                                                lineNumber: 614,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 613,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 589,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 588,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '80px 48px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#080d18'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse at 50% 60%,rgba(255,184,0,.09) 0%,transparent 60%)',
                            animation: 'ctaGlow 4s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 625,
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
                                    style: {
                                        fontSize: 9,
                                        letterSpacing: '0.4em',
                                        textTransform: 'uppercase',
                                        color: '#00E5FF',
                                        marginBottom: 24,
                                        display: 'block',
                                        fontFamily: 'JetBrains Mono, monospace'
                                    },
                                    children: "🚀 2026 Batch · Limited Seats"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: 'Syne, sans-serif',
                                        fontWeight: 800,
                                        fontSize: 'clamp(44px,9vw,110px)',
                                        lineHeight: .88,
                                        letterSpacing: '-0.04em',
                                        marginBottom: 28
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
                                            lineNumber: 630,
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
                                            lineNumber: 631,
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
                                            lineNumber: 632,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'DM Serif Display, serif',
                                        fontStyle: 'italic',
                                        fontSize: 20,
                                        color: 'rgba(239,243,255,.38)',
                                        marginBottom: 44
                                    },
                                    children: "25 days. Real projects. Government certificate. Trivandrum, Kerala."
                                }, void 0, false, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 14,
                                        justifyContent: 'center',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#ac-register",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                document.getElementById('ac-register')?.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
                                            },
                                            style: {
                                                background: '#FFB800',
                                                color: '#000507',
                                                fontFamily: 'JetBrains Mono, monospace',
                                                fontSize: 10,
                                                fontWeight: 700,
                                                letterSpacing: '0.18em',
                                                textTransform: 'uppercase',
                                                padding: '18px 44px',
                                                border: 'none',
                                                cursor: 'pointer',
                                                textDecoration: 'none'
                                            },
                                            children: "Apply for 2026 Camp →"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 636,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+919447329972",
                                            style: {
                                                background: 'transparent',
                                                color: '#EFF3FF',
                                                fontFamily: 'JetBrains Mono, monospace',
                                                fontSize: 10,
                                                fontWeight: 700,
                                                letterSpacing: '0.18em',
                                                textTransform: 'uppercase',
                                                padding: '18px 44px',
                                                border: '1px solid #2a3050',
                                                cursor: 'pointer',
                                                textDecoration: 'none'
                                            },
                                            children: "📞 Call Us Now"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 640,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActivityCampSection.tsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActivityCampSection.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 624,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    background: '#000507',
                    borderTop: '1px solid rgba(255,255,255,.05)',
                    padding: '56px 56px 32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                            gap: 40,
                            marginBottom: 48,
                            maxWidth: 1200,
                            margin: '0 auto 48px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Syne, sans-serif',
                                            fontWeight: 800,
                                            fontSize: 16,
                                            color: '#FFB800',
                                            letterSpacing: '0.12em',
                                            display: 'block',
                                            marginBottom: 14
                                        },
                                        children: "The Oxford Computers"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 653,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'DM Serif Display, serif',
                                            fontStyle: 'italic',
                                            fontSize: 15,
                                            lineHeight: 1.65,
                                            color: 'rgba(239,243,255,.35)',
                                            maxWidth: 260
                                        },
                                        children: "Kerala State Rutronix-approved AI & computer education institute. Transforming students into tech professionals since 1995."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 654,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 652,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            letterSpacing: '0.3em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 20,
                                            display: 'block',
                                            fontFamily: 'JetBrains Mono, monospace'
                                        },
                                        children: "AI Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 657,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        'AI Digital Marketing',
                                        'AI Office Suite',
                                        'AI Web App Dev',
                                        'Junior YouTuber',
                                        'AI Prompt Engineer',
                                        'AI Designer',
                                        'Junior Python',
                                        'Game Dev',
                                        'Generative AI'
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            onClick: ()=>document.getElementById('ac-courses')?.scrollIntoView({
                                                    behavior: 'smooth'
                                                }),
                                            style: {
                                                display: 'block',
                                                fontSize: 12,
                                                color: 'rgba(239,243,255,.35)',
                                                marginBottom: 10,
                                                cursor: 'pointer'
                                            },
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 659,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            letterSpacing: '0.3em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 20,
                                            display: 'block',
                                            fontFamily: 'JetBrains Mono, monospace'
                                        },
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 663,
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
                                        ],
                                        [
                                            'Leave a Review ★',
                                            'https://g.page/r/CTLGp4P09cviEBM/review'
                                        ]
                                    ].map(([l, h])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: h,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                display: 'block',
                                                fontSize: 12,
                                                color: 'rgba(239,243,255,.35)',
                                                marginBottom: 10,
                                                textDecoration: 'none'
                                            },
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/components/ActivityCampSection.tsx",
                                            lineNumber: 665,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            letterSpacing: '0.3em',
                                            textTransform: 'uppercase',
                                            color: '#2a3050',
                                            marginBottom: 20,
                                            display: 'block',
                                            fontFamily: 'JetBrains Mono, monospace'
                                        },
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 669,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+919447329972",
                                        style: {
                                            display: 'block',
                                            fontSize: 12,
                                            color: 'rgba(239,243,255,.35)',
                                            marginBottom: 10,
                                            textDecoration: 'none'
                                        },
                                        children: "+91 94473 29972"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:t.005.rutronix@gmail.com",
                                        style: {
                                            display: 'block',
                                            fontSize: 12,
                                            color: 'rgba(239,243,255,.35)',
                                            marginBottom: 10,
                                            textDecoration: 'none'
                                        },
                                        children: "t.005.rutronix@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 671,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            fontSize: 12,
                                            color: 'rgba(239,243,255,.35)',
                                            marginBottom: 10
                                        },
                                        children: "Malayinkeezhu"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 672,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            fontSize: 12,
                                            color: 'rgba(239,243,255,.35)',
                                            marginBottom: 10
                                        },
                                        children: "Trivandrum, Kerala 695571"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/919447329972",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            display: 'block',
                                            fontSize: 12,
                                            color: '#FFB800',
                                            textDecoration: 'none'
                                        },
                                        children: "💬 WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 674,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,.04)',
                            paddingTop: 24,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 12,
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 8,
                                    letterSpacing: '0.12em',
                                    color: '#2a3050',
                                    textTransform: 'uppercase',
                                    fontFamily: 'JetBrains Mono, monospace'
                                },
                                children: "© 2026 The Oxford Computers · Kerala State Rutronix Approved · AI Vacation Activity Camp 2026"
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 16
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
                                            width: 34,
                                            height: 34,
                                            border: '1px solid rgba(255,255,255,.07)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 13,
                                            textDecoration: 'none',
                                            color: '#EFF3FF'
                                        },
                                        children: l
                                    }, l, false, {
                                        fileName: "[project]/components/ActivityCampSection.tsx",
                                        lineNumber: 681,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ActivityCampSection.tsx",
                                lineNumber: 679,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActivityCampSection.tsx",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActivityCampSection.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActivityCampSection.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s4(ActivityCampSection, "fydUW4mloUYcIfucy/stskfNJ5M=");
_c7 = ActivityCampSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "FadeIn");
__turbopack_context__.k.register(_c1, "SectionLabel");
__turbopack_context__.k.register(_c2, "SectionTitle");
__turbopack_context__.k.register(_c3, "Gold");
__turbopack_context__.k.register(_c4, "StatCounter");
__turbopack_context__.k.register(_c5, "CourseCard");
__turbopack_context__.k.register(_c6, "FaqItem");
__turbopack_context__.k.register(_c7, "ActivityCampSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_2a3c5bb9._.js.map