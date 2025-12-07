// 问卷数据
const questions = [
    {
        dimension: '核心动力维度',
        question: '到球馆时，我通常最先想的是：',
        options: [
            { text: '今天要把技术练好 / 想赢几分', value: 'Competitive' },
            { text: '今天和谁打比较好玩', value: 'Playful' }
        ]
    },
    {
        dimension: '核心动力维度',
        question: '一局打完，我最在意的是：',
        options: [
            { text: '我的失误率、进攻质量是否更好', value: 'Competitive' },
            { text: '氛围好不好、今天开不开心', value: 'Playful' }
        ]
    },
    {
        dimension: '核心动力维度',
        question: '如果只能从以下两件事情选一件：',
        options: [
            { text: '跟高手对抗，即使输也能提升', value: 'Competitive' },
            { text: '跟朋友轻松对打，笑到肚子痛', value: 'Playful' }
        ]
    },
    {
        dimension: '技术风格维度',
        question: '对手回了一个质量一般的网前球，我会：',
        options: [
            { text: '抢先上手进攻', value: 'Aggressive' },
            { text: '稳稳处理，保证过网', value: 'Defensive' }
        ]
    },
    {
        dimension: '技术风格维度',
        question: '遇到"多拍回合"时，我会：',
        options: [
            { text: '寻找突破点，突然加速或变线', value: 'Aggressive' },
            { text: '有耐心地消耗对方，等待更合适的机会', value: 'Defensive' }
        ]
    },
    {
        dimension: '技术风格维度',
        question: '比分来到 19:19，我会：',
        options: [
            { text: '试图创造机会，主动进攻', value: 'Aggressive' },
            { text: '打得更稳，先逼对手犯错', value: 'Defensive' }
        ]
    },
    {
        dimension: '沟通模式维度',
        question: '双打出现误会时，我会：',
        options: [
            { text: '主动说："刚刚那球我们可以这样…"', value: 'Expressive' },
            { text: '默契调整，不多说', value: 'Quiet' }
        ]
    },
    {
        dimension: '沟通模式维度',
        question: '等场地或休息时，我通常：',
        options: [
            { text: '会和队友讨论战术、聊天、互动', value: 'Expressive' },
            { text: '自己静静调整，心理准备', value: 'Quiet' }
        ]
    },
    {
        dimension: '沟通模式维度',
        question: '在娱乐单打局中，如果对手打出了一个精彩的杀球，我通常会：',
        options: [
            { text: '顺口夸一句："好球！"', value: 'Expressive' },
            { text: '心里认可，但不会特别说出来', value: 'Quiet' }
        ]
    }
];

// 人格类型描述
const personalityTypes = {
    'PDQ': {
        name: '佛系隐士咕',
        description: '"我随缘，但我很会托底。"\n关键词：随缘、稳守、安静\n描述：PDQ 是球场里的空气守护者，不抢戏、不喧哗、不争先，但永远稳在该在的位置。',
        motivation: '玩乐型 (P)',
        style: '防守型 (D)',
        communication: '安静型 (Q)'
    },
    'PAE': {
        name: '快乐嘴炮咕',
        description: '"玩得爽，也顺便打点神球。"\n关键词：外向、探索、享受当下\n描述：PAE 打球不是为了赢，是为了释放能量、玩出气氛、体验爽感。',
        motivation: '玩乐型 (P)',
        style: '攻击型 (A)',
        communication: '表达型 (E)'
    },
    'PDE': {
        name: '温柔话痨咕',
        description: '"技术稳、人随和，球场最舒服的队友。"\n关键词：友好、包容、稳定\n描述：PDE = 人见人爱的队友 × 球场加湿器 × 心理稳定器。他们特别会沟通，一句"没事，我来补"能让队友瞬间 calm down。',
        motivation: '玩乐型 (P)',
        style: '防守型 (D)',
        communication: '表达型 (E)'
    },
    'PAQ': {
        name: '能量发电咕',
        description: '"不说话，但我球风很野。"\n关键词：安静、爆发型、执行力强\n描述：PAQ 很像羽毛球场的静音高速马达。没什么表情、没什么台词、没什么噪音。但球速、爆发、攻击力，全都开到很高档。他们不说话，但球已经替他们说完了。',
        motivation: '玩乐型 (P)',
        style: '攻击型 (A)',
        communication: '安静型 (Q)'
    },
    'CAE': {
        name: '社交狂徒咕',
        description: '关键词：进攻、竞争、外向\n描述：嘴上很热闹，球风更热闹~上场就像开了狂热模式，球风强势、节奏极快，追求"打出优势分"的爽感。',
        motivation: '竞争型 (C)',
        style: '攻击型 (A)',
        communication: '表达型 (E)'
    },
    'CAQ': {
        name: '耐心刺客咕',
        description: '关键词：强执行、冷静、进攻\n描述：安静，却杀伤力惊人。进攻强但不吵闹，沉着、强势、执行力极高。球风锐利但对自己要求高，失误后会默默调整。常被误以为"高冷"，但其实只是专注。',
        motivation: '竞争型 (C)',
        style: '攻击型 (A)',
        communication: '安静型 (Q)'
    },
    'CDE': {
        name: '节奏指挥咕',
        description: '关键词：战术、沟通、稳健\n描述：自己稳，还能带着别人一起稳。是队内的定海神针、节奏稳定器',
        motivation: '竞争型 (C)',
        style: '防守型 (D)',
        communication: '表达型 (E)'
    },
    'CDQ': {
        name: '沉默墙盾咕',
        description: '关键词：稳、冷静、赢优先\n描述：以赢为目标但方式克制稳健，守备反击是拿手绝活。情绪稳定、淡定冷静，沟通不多但超可靠！',
        motivation: '竞争型 (C)',
        style: '防守型 (D)',
        communication: '安静型 (Q)'
    }
};

// 全局状态
let currentQuestionIndex = 0;
let answers = [];
let scores = {
    Competitive: 0,
    Playful: 0,
    Aggressive: 0,
    Defensive: 0,
    Expressive: 0,
    Quiet: 0
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有屏幕初始隐藏
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // 显示欢迎页面
    document.getElementById('welcome-screen').classList.add('active');
    
    // 检查html2canvas库是否加载
    checkHtml2Canvas();
});

// 检查html2canvas库加载状态
function checkHtml2Canvas() {
    // 每500ms检查一次，最多检查10次（5秒）
    let checkCount = 0;
    const maxChecks = 10;
    
    const checkInterval = setInterval(() => {
        checkCount++;
        
        if (typeof html2canvas !== 'undefined') {
            clearInterval(checkInterval);
            console.log('html2canvas库已就绪');
            return;
        }
        
        if (checkCount >= maxChecks) {
            clearInterval(checkInterval);
            console.warn('html2canvas库加载超时，保存功能可能不可用');
        }
    }, 500);
}

// 开始测试
function startQuiz() {
    currentQuestionIndex = 0;
    answers = [];
    scores = {
        Competitive: 0,
        Playful: 0,
        Aggressive: 0,
        Defensive: 0,
        Expressive: 0,
        Quiet: 0
    };
    
    showScreen('quiz-screen');
    showQuestion();
}

// 显示问题
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const dimensionLabel = document.getElementById('dimension-label');
    const progressFill = document.getElementById('progress-fill');
    const currentQuestionSpan = document.getElementById('current-question');
    const prevBtn = document.getElementById('prev-btn');

    // 更新维度标签
    dimensionLabel.textContent = question.dimension;

    // 更新问题文本
    questionElement.textContent = question.question;

    // 更新进度
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // 清空并生成选项
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.textContent = option.text;
        optionButton.onclick = () => selectOption(option.value);
        
        // 如果已经回答过这题，标记已选选项
        if (answers[currentQuestionIndex] === option.value) {
            optionButton.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionButton);
    });

    // 显示/隐藏上一题按钮
    prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
}

// 选择选项
function selectOption(value) {
    // 保存答案
    answers[currentQuestionIndex] = value;

    // 更新得分
    scores[value]++;

    // 高亮选中的选项
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, index) => {
        const question = questions[currentQuestionIndex];
        if (question.options[index].value === value) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // 延迟后自动进入下一题
    setTimeout(() => {
        nextQuestion();
    }, 500);
}

// 下一题
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

// 上一题
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        // 撤销上一题的得分
        const prevAnswer = answers[currentQuestionIndex - 1];
        if (prevAnswer) {
            scores[prevAnswer]--;
            answers[currentQuestionIndex - 1] = null;
        }
        
        currentQuestionIndex--;
        showQuestion();
    }
}

// 显示结果
function showResult() {
    // 计算每个维度的结果
    const motivation = scores.Competitive >= 2 ? 'C' : 'P';
    const style = scores.Aggressive >= 2 ? 'A' : 'D';
    const communication = scores.Expressive >= 2 ? 'E' : 'Q';
    
    const personalityCode = motivation + style + communication;
    const personality = personalityTypes[personalityCode];

    // 显示结果
    document.getElementById('personality-type').textContent = personalityCode;
    document.getElementById('personality-name').textContent = personality.name;
    document.getElementById('personality-description').textContent = personality.description;
    
    // 计算并显示三个维度的进度条
    // 核心动力：C vs P (Competitive vs Playful)
    // 左边是C，右边是P，进度条从左开始填充，填充越多表示越偏向C
    const competitiveScore = scores.Competitive;
    const playfulScore = scores.Playful;
    const motivationTotal = competitiveScore + playfulScore;
    const competitivePercent = motivationTotal > 0 ? (competitiveScore / motivationTotal) * 100 : 50;
    const motivationBar = document.getElementById('motivation-bar');
    motivationBar.style.width = competitivePercent + '%';
    
    // 技术风格：A vs D (Aggressive vs Defensive)
    // 左边是A，右边是D，进度条从左开始填充，填充越多表示越偏向A
    const aggressiveScore = scores.Aggressive;
    const defensiveScore = scores.Defensive;
    const styleTotal = aggressiveScore + defensiveScore;
    const aggressivePercent = styleTotal > 0 ? (aggressiveScore / styleTotal) * 100 : 50;
    const styleBar = document.getElementById('style-bar');
    styleBar.style.width = aggressivePercent + '%';
    
    // 沟通模式：E vs Q (Expressive vs Quiet)
    // 左边是E，右边是Q，进度条从左开始填充，填充越多表示越偏向E
    const expressiveScore = scores.Expressive;
    const quietScore = scores.Quiet;
    const communicationTotal = expressiveScore + quietScore;
    const expressivePercent = communicationTotal > 0 ? (expressiveScore / communicationTotal) * 100 : 50;
    const communicationBar = document.getElementById('communication-bar');
    communicationBar.style.width = expressivePercent + '%';
    
    // 显示人格形象图片
    const personalityImage = document.getElementById('personality-image');
    personalityImage.src = `各个人格形象/${personalityCode}.png`;
    personalityImage.alt = personality.name;

    showScreen('result-screen');
}

// 切换屏幕
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// 重新开始
function restartQuiz() {
    showScreen('welcome-screen');
}

// 保存测试结果为图片
function saveResult() {
    // 检查html2canvas是否加载，如果没有则等待加载
    if (typeof html2canvas === 'undefined') {
        const saveBtn = document.querySelector('.btn-secondary');
        const originalText = saveBtn ? saveBtn.textContent : '保存测试结果';
        if (saveBtn) {
            saveBtn.textContent = '正在加载库...';
            saveBtn.disabled = true;
        }
        
        // 等待html2canvas加载（最多等待5秒）
        let waitCount = 0;
        const maxWait = 50; // 50次 * 100ms = 5秒
        
        const waitInterval = setInterval(() => {
            waitCount++;
            if (typeof html2canvas !== 'undefined') {
                clearInterval(waitInterval);
                if (saveBtn) {
                    saveBtn.textContent = originalText;
                    saveBtn.disabled = false;
                }
                // 重新调用保存函数
                saveResult();
            } else if (waitCount >= maxWait) {
                clearInterval(waitInterval);
                if (saveBtn) {
                    saveBtn.textContent = originalText;
                    saveBtn.disabled = false;
                }
                alert('图片生成库加载超时，请刷新页面重试。\n\n如果问题持续，请检查：\n1. 网络连接\n2. 是否被广告拦截器拦截\n3. 浏览器控制台的错误信息');
            }
        }, 100);
        return;
    }
    
    // 2:4 比例尺寸: 500 x 1000 像素 (3x 缩放后为 1500 x 3000)
    const targetWidth = 500; // 逻辑像素宽度
    const targetHeight = 1000; // 逻辑像素高度 (2:4比例，即1:2)
    const scale = 3; // 3x 缩放以获得高分辨率 (1500 x 3000)
    
    const resultScreen = document.getElementById('result-screen');
    const resultContent = document.querySelector('.result-content');
    if (!resultContent || !resultScreen) {
        alert('未找到结果内容，请先完成测试');
        return;
    }
    
    // 显示加载提示
    const saveBtn = document.querySelector('.btn-secondary');
    const originalText = saveBtn ? saveBtn.textContent : '保存测试结果';
    if (saveBtn) {
        saveBtn.textContent = '正在保存...';
        saveBtn.disabled = true;
    }
    
    // 隐藏按钮，显示二维码
    const resultActions = resultContent.querySelector('.result-actions');
    if (resultActions) {
        resultActions.style.display = 'none';
    }
    
    // 确保二维码显示
    const qrCodeSection = document.getElementById('qr-code-section');
    if (qrCodeSection) {
        qrCodeSection.style.display = 'block';
    }
    
    // 检测是否使用file://协议
    const isFileProtocol = window.location.protocol === 'file:';
    console.log('协议类型:', window.location.protocol);
    
    const allImages = resultContent.querySelectorAll('img');
    console.log('找到图片数量:', allImages.length);
    
    let imagePromises;
    
    if (isFileProtocol) {
        // 对于file://协议，图片已经加载，直接等待即可
        console.log('检测到file://协议，跳过图片转换');
        imagePromises = Array.from(allImages).map((img, index) => {
            console.log(`图片 ${index + 1} 路径:`, img.src);
            return new Promise((resolve) => {
                if (img.complete && img.naturalHeight !== 0 && img.naturalWidth !== 0) {
                    console.log(`图片 ${index + 1} 已加载完成`);
                    resolve();
                } else {
                    const timeout = setTimeout(() => {
                        console.warn('图片加载超时:', img.src);
                        resolve();
                    }, 3000);
                    
                    img.addEventListener('load', () => {
                        clearTimeout(timeout);
                        console.log(`图片 ${index + 1} 加载成功`);
                        resolve();
                    }, { once: true });
                    
                    img.addEventListener('error', () => {
                        clearTimeout(timeout);
                        console.error('图片加载失败:', img.src);
                        resolve();
                    }, { once: true });
                }
            });
        });
    } else {
        // 对于http/https协议，转换图片为data URL
        imagePromises = Array.from(allImages).map((img, index) => {
            console.log(`图片 ${index + 1} 路径:`, img.src);
            
            // 如果已经是data URL，直接返回
            if (img.src.startsWith('data:')) {
                console.log(`图片 ${index + 1} 已经是data URL`);
                return Promise.resolve();
            }
            
            return new Promise((resolve) => {
                // 使用fetch方式加载图片并转换为data URL
                fetch(img.src)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('HTTP错误: ' + response.status);
                        }
                        return response.blob();
                    })
                    .then(blob => {
                        return new Promise((resolveBlob) => {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                img.src = reader.result;
                                console.log(`图片 ${index + 1} 通过fetch转换为data URL成功`);
                                resolve();
                            };
                            reader.onerror = () => {
                                console.error('FileReader失败');
                                resolve();
                            };
                            reader.readAsDataURL(blob);
                        });
                    })
                    .catch(err => {
                        console.error('fetch失败:', err);
                        resolve(); // 即使失败也继续
                    });
            });
        });
    }
    
    Promise.all(imagePromises).then(() => {
        console.log('所有图片处理完成，等待DOM渲染...');
        return new Promise(resolve => setTimeout(resolve, 500));
    }).then(() => {
        console.log('开始截图...');
        
        // 确保获取完整的内容高度
        const fullHeight = Math.max(
            resultContent.scrollHeight,
            resultContent.offsetHeight,
            resultContent.clientHeight
        );
        const fullWidth = Math.max(
            resultContent.scrollWidth,
            resultContent.offsetWidth,
            resultContent.clientWidth
        );
        
        console.log('内容尺寸:', fullWidth, 'x', fullHeight);
        
        // 直接对结果内容进行截图，使用更精确的配置
        return html2canvas(resultContent, {
            scale: scale,
            useCORS: !isFileProtocol,
            allowTaint: isFileProtocol,
            logging: false,
            backgroundColor: '#ffffff', // 使用白色背景
            width: fullWidth,
            height: fullHeight,
            windowWidth: fullWidth,
            windowHeight: fullHeight,
            x: 0,
            y: 0,
            scrollX: 0,
            scrollY: 0,
            removeContainer: false,
            foreignObjectRendering: false, // 禁用foreignObject以获得更好的兼容性
            imageTimeout: 15000, // 增加图片加载超时时间
            ignoreElements: (element) => {
                // 忽略按钮
                return element.classList && element.classList.contains('btn');
            },
            onclone: function(clonedDoc, element) {
                // 确保克隆的元素保持所有样式
                const clonedContent = clonedDoc.querySelector('.result-content');
                if (clonedContent) {
                    // 设置白色背景（移除渐变）
                    clonedContent.style.background = '#ffffff';
                    clonedContent.style.backgroundColor = '#ffffff';
                    clonedContent.style.backgroundImage = 'none';
                    clonedContent.style.width = (resultContent.offsetWidth || resultContent.scrollWidth) + 'px';
                    clonedContent.style.height = 'auto'; // 使用auto以包含所有内容
                    clonedContent.style.minHeight = (resultContent.offsetHeight || resultContent.scrollHeight) + 'px';
                    clonedContent.style.overflow = 'visible'; // 确保内容不被裁剪
                    
                    // 确保所有字体和样式正确
                    const computedStyle = window.getComputedStyle(resultContent);
                    clonedContent.style.fontFamily = computedStyle.fontFamily;
                    clonedContent.style.fontSize = computedStyle.fontSize;
                    clonedContent.style.color = computedStyle.color;
                }
                
                // 确保所有图片都正确显示，并设置正确的层级
                const clonedImages = clonedDoc.querySelectorAll('img');
                clonedImages.forEach((img, idx) => {
                    const originalImg = allImages[idx];
                    if (originalImg) {
                        const originalStyle = window.getComputedStyle(originalImg);
                        
                        // 保持图片的原始尺寸和样式
                        img.style.width = originalStyle.width;
                        img.style.height = originalStyle.height;
                        img.style.maxWidth = originalStyle.maxWidth;
                        img.style.maxHeight = originalStyle.maxHeight;
                        img.style.minWidth = originalStyle.minWidth;
                        img.style.minHeight = originalStyle.minHeight;
                        
                        // 确保图片在最上层显示，移除任何可能影响显示的样式
                        img.style.position = 'relative';
                        img.style.zIndex = '999';
                        img.style.display = 'block';
                        img.style.visibility = 'visible';
                        img.style.opacity = '1'; // 确保完全不透明
                        img.style.background = 'transparent';
                        img.style.backgroundColor = 'transparent';
                        
                        // 移除可能影响显示的动画
                        img.style.animation = 'none';
                        img.style.transition = 'none';
                        img.style.transform = 'none';
                        
                        // 确保图片源正确
                        if (originalImg.src && !img.src.startsWith('data:')) {
                            img.src = originalImg.src;
                        }
                    }
                });
                
                // 确保人格形象图片容器正确显示
                const personalityImageContainer = clonedDoc.querySelector('.personality-image-container');
                if (personalityImageContainer) {
                    personalityImageContainer.style.display = 'flex';
                    personalityImageContainer.style.justifyContent = 'center';
                    personalityImageContainer.style.alignItems = 'center';
                    personalityImageContainer.style.position = 'relative';
                    personalityImageContainer.style.zIndex = '10';
                    personalityImageContainer.style.background = 'transparent';
                    personalityImageContainer.style.backgroundColor = 'transparent';
                    personalityImageContainer.style.opacity = '1';
                }
                
                // 确保二维码区域正确显示
                const qrCodeSection = clonedDoc.querySelector('.qr-code-section');
                if (qrCodeSection) {
                    qrCodeSection.style.display = 'block';
                    qrCodeSection.style.position = 'relative';
                    qrCodeSection.style.zIndex = '10';
                    qrCodeSection.style.opacity = '1';
                    qrCodeSection.style.visibility = 'visible';
                    qrCodeSection.style.background = 'transparent';
                    qrCodeSection.style.backgroundColor = 'transparent';
                }
                
                // 移除二维码容器的半透明背景
                const qrCodeContainer = clonedDoc.querySelector('.qr-code-container');
                if (qrCodeContainer) {
                    qrCodeContainer.style.background = 'transparent';
                    qrCodeContainer.style.backgroundColor = 'transparent';
                    qrCodeContainer.style.opacity = '1';
                }
                
                const qrCodeImage = clonedDoc.querySelector('.qr-code-image');
                if (qrCodeImage) {
                    qrCodeImage.style.opacity = '1';
                    qrCodeImage.style.visibility = 'visible';
                    qrCodeImage.style.display = 'block';
                    qrCodeImage.style.zIndex = '999';
                    qrCodeImage.style.position = 'relative';
                    qrCodeImage.style.background = 'transparent';
                    qrCodeImage.style.backgroundColor = 'transparent';
                }
            }
        });
    }).then(canvas => {
        console.log('Canvas尺寸:', canvas.width, 'x', canvas.height);
        
        // 根据实际内容高度动态计算画布尺寸，保持2:4比例
        const actualContentHeight = canvas.height;
        const actualContentWidth = canvas.width;
        
        // 计算合适的画布尺寸（保持2:4比例，但确保能容纳所有内容）
        let finalWidth = targetWidth * scale; // 1500
        let finalHeight = targetHeight * scale; // 3000
        
        // 如果内容高度超过预设高度，按比例扩展
        if (actualContentHeight > finalHeight) {
            const ratio = actualContentHeight / finalHeight;
            finalHeight = actualContentHeight;
            finalWidth = Math.max(finalWidth, actualContentWidth);
        }
        
        // 创建画布
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = finalWidth;
        finalCanvas.height = finalHeight;
        const ctx = finalCanvas.getContext('2d');
        
        // 绘制白色背景
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
        
        // 计算内容在画布中的位置（水平居中，垂直从顶部开始）
        const contentWidth = Math.min(canvas.width, finalCanvas.width);
        const contentHeight = canvas.height; // 使用完整的内容高度，不裁剪
        const xOffset = (finalCanvas.width - contentWidth) / 2; // 水平居中
        const yOffset = 0; // 从顶部开始
        
        // 绘制完整内容（水平居中，不裁剪高度）
        ctx.drawImage(
            canvas,
            0, 0, canvas.width, canvas.height, // 源：完整内容
            xOffset, yOffset, contentWidth, contentHeight // 目标：水平居中，完整高度
        );
        
        console.log('最终画布尺寸:', finalCanvas.width, 'x', finalCanvas.height);
        console.log('内容尺寸:', contentWidth, 'x', contentHeight);
        
        // 使用最终画布
        canvas = finalCanvas;
        
        // 下载函数
        function downloadImage(dataUrl, isBlob = false) {
            const link = document.createElement('a');
            const personalityCode = document.getElementById('personality-type').textContent;
            link.download = `羽毛球MBTI测试结果_${personalityCode}_${new Date().getTime()}.png`;
            link.href = dataUrl;
            link.click();
            
            // 如果是blob URL，需要清理
            if (isBlob) {
                setTimeout(() => URL.revokeObjectURL(dataUrl), 100);
            }
            
            // 恢复按钮显示
            if (resultActions) {
                resultActions.style.display = 'flex';
            }
            
            // 恢复按钮状态
            if (saveBtn) {
                saveBtn.textContent = originalText;
                saveBtn.disabled = false;
            }
            
            // 显示成功提示
            setTimeout(() => {
                alert('测试结果已保存！');
            }, 100);
        }
        
        // 对于file://协议，使用toBlob方式
        if (isFileProtocol) {
            console.log('使用file://协议，尝试toBlob方式');
            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    downloadImage(url, true);
                } else {
                    // toBlob失败，提示用户使用本地服务器
                    alert('保存失败！\n\n由于浏览器安全限制，使用file://协议无法保存图片。\n\n请使用以下方法之一：\n\n1. 使用本地服务器运行：\n   在终端中进入项目目录，运行：\n   python3 -m http.server 8000\n   然后在浏览器中访问：http://localhost:8000\n\n2. 使用VS Code的Live Server扩展\n\n3. 使用其他本地服务器工具');
                    
                    // 恢复按钮显示
                    if (resultActions) {
                        resultActions.style.display = 'flex';
                    }
                    
                    // 恢复按钮状态
                    if (saveBtn) {
                        saveBtn.textContent = originalText;
                        saveBtn.disabled = false;
                    }
                }
            }, 'image/png', 1.0);
        } else {
            // 对于http/https协议，直接导出
            try {
                const dataUrl = canvas.toDataURL('image/png', 1.0);
                downloadImage(dataUrl);
            } catch (e) {
                console.error('toDataURL失败，尝试toBlob:', e);
                // 如果toDataURL失败，尝试toBlob
                canvas.toBlob((blob) => {
                    if (blob) {
                        const url = URL.createObjectURL(blob);
                        downloadImage(url, true);
                    } else {
                        alert('保存失败，请检查浏览器控制台的错误信息');
                        
                        // 恢复按钮显示
                        if (resultActions) {
                            resultActions.style.display = 'flex';
                        }
                        
                        // 恢复按钮状态
                        if (saveBtn) {
                            saveBtn.textContent = originalText;
                            saveBtn.disabled = false;
                        }
                    }
                }, 'image/png', 1.0);
            }
        }
        
    }).catch(err => {
        console.error('保存失败:', err);
        console.error('错误详情:', err.message, err.stack);
        alert('保存失败：' + (err.message || '未知错误，请检查浏览器控制台'));
        
        // 恢复按钮显示
        if (resultActions) {
            resultActions.style.display = 'flex';
        }
        
        // 恢复按钮状态
        if (saveBtn) {
            saveBtn.textContent = originalText;
            saveBtn.disabled = false;
        }
    });
}
