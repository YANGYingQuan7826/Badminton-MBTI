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
    'CAE': {
        name: '竞争型-攻击型-表达型',
        description: '你是一个充满激情的竞技者！你追求胜利，喜欢主动进攻，并且善于沟通交流。在球场上，你是那个既会全力以赴，又会活跃气氛的核心人物。',
        motivation: '竞争型 (C)',
        style: '攻击型 (A)',
        communication: '表达型 (E)'
    },
    'CAD': {
        name: '竞争型-攻击型-安静型',
        description: '你是场上的"沉默杀手"！你专注于技术和战术，喜欢通过犀利的进攻赢得比赛，但更倾向于用行动而非言语来表达自己。',
        motivation: '竞争型 (C)',
        style: '攻击型 (A)',
        communication: '安静型 (Q)'
    },
    'CDE': {
        name: '竞争型-防守型-表达型',
        description: '你是场上的"智慧型指挥官"！你追求胜利，但更倾向于稳扎稳打的策略，善于与队友沟通配合，用耐心和智慧赢得比赛。',
        motivation: '竞争型 (C)',
        style: '防守型 (D)',
        communication: '表达型 (E)'
    },
    'CDQ': {
        name: '竞争型-防守型-安静型',
        description: '你是场上的"冷静分析家"！你追求技术提升和胜利，喜欢稳健的打法，更倾向于在内心默默分析，用实力说话。',
        motivation: '竞争型 (C)',
        style: '防守型 (D)',
        communication: '安静型 (Q)'
    },
    'PAE': {
        name: '玩乐型-攻击型-表达型',
        description: '你是场上的"活力四射者"！你享受打球的乐趣，喜欢主动出击，并且热情开朗，是球场上最受欢迎的类型之一。',
        motivation: '玩乐型 (P)',
        style: '攻击型 (A)',
        communication: '表达型 (E)'
    },
    'PAD': {
        name: '玩乐型-攻击型-安静型',
        description: '你是场上的"自由主义者"！你享受打球的快乐，喜欢主动进攻，但更倾向于用自己的方式享受比赛，不太在意场上的交流。',
        motivation: '玩乐型 (P)',
        style: '攻击型 (A)',
        communication: '安静型 (Q)'
    },
    'PDE': {
        name: '玩乐型-防守型-表达型',
        description: '你是场上的"社交型玩家"！你打球是为了开心和社交，更喜欢稳健的打法，善于与球友互动交流，营造愉快的氛围。',
        motivation: '玩乐型 (P)',
        style: '防守型 (D)',
        communication: '表达型 (E)'
    },
    'PDQ': {
        name: '玩乐型-防守型-安静型',
        description: '你是场上的"佛系玩家"！你享受打球的乐趣，喜欢稳健的打法，更倾向于安静地享受运动本身，不太在意输赢或社交。',
        motivation: '玩乐型 (P)',
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
});

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
    document.getElementById('motivation-result').textContent = personality.motivation;
    document.getElementById('style-result').textContent = personality.style;
    document.getElementById('communication-result').textContent = personality.communication;

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

// 分享结果
function shareResult() {
    const personalityCode = document.getElementById('personality-type').textContent;
    const personalityName = document.getElementById('personality-name').textContent;
    const shareText = `我的羽毛球MBTI人格类型是：${personalityCode} - ${personalityName}\n\n快来测试你的羽毛球人格类型吧！\n${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: '羽毛球MBTI人格测试',
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('分享失败:', err);
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('结果已复制到剪贴板！');
        });
    } else {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('结果已复制到剪贴板！');
    }
}
