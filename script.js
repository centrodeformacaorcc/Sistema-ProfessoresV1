const { useState, useEffect, useMemo, useCallback, useRef } = React;
        const { createRoot } = ReactDOM;

        const kebabToPascal = (str) =>
            str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase())
                .replace(/^[a-z]/, (g) => g.toUpperCase());

        const Icon = ({ name, size = 24, className = "", ...props }) => {
            const ref = useRef(null);

            useEffect(() => {
                if (!ref.current || !window.lucide) return;
                const pascalName = kebabToPascal(name);
                const iconDef = window.lucide.icons ? window.lucide.icons[pascalName] : null;
                if (iconDef) {
                    const svg = window.lucide.createElement(iconDef);
                    svg.setAttribute('width', size);
                    svg.setAttribute('height', size);
                    ref.current.innerHTML = '';
                    ref.current.appendChild(svg);
                }
            }, [name, size]);

            return <span ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, verticalAlign: 'middle', lineHeight: 0 }} {...props}></span>;
        };

        const CustomCourseIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/N03iLnL.png" alt="Aulas e Scripts" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomProfessorIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/85pC8ek.png" alt="Manual do Professor" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomHomeIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/3zN40MT.png" alt="Início" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomReportIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/bYLcRqs.png" alt="Formulário" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomHistoryIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/crHNfQF.png" alt="Histórico" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomHTrophyIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/poHdvN7.png" alt="Troféu" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        const CustomCorrectionIcon = ({ size = 24, className = "" }) => (
            <img src="https://i.imgur.com/SgjBp7C.png" alt="Correção" style={{ width: size, height: size, objectFit: 'contain' }} className={className} />
        );

        // Icon definitions
        const Menu = (p) => <Icon name="menu" {...p} />;
        const Moon = (p) => <Icon name="moon" {...p} />;
        const Sun = (p) => <Icon name="sun" {...p} />;
        const ChevronDown = (p) => <Icon name="chevron-down" {...p} />;
        const ChevronUp = (p) => <Icon name="chevron-up" {...p} />;
        const CheckCircle = (p) => <Icon name="check-circle" {...p} />;
        const Copy = (p) => <Icon name="copy" {...p} />;
        const Check = (p) => <Icon name="check" {...p} />;
        const ChevronRight = (p) => <Icon name="chevron-right" {...p} />;
        const X = (p) => <Icon name="x" {...p} />;
        const Users = (p) => <Icon name="users" {...p} />;
        const Lock = (p) => <Icon name="lock" {...p} />;
        const Loader2 = (p) => <Icon name="loader-2" {...p} />;
        const Info = (p) => <Icon name="info" {...p} />;
        const AlertTriangle = (p) => <Icon name="alert-triangle" {...p} />;
        const CheckCircle2 = (p) => <Icon name="check-circle-2" {...p} />;
        const XCircle = (p) => <Icon name="x-circle" {...p} />;
        const Search = (p) => <Icon name="search" {...p} />;
        const Filter = (p) => <Icon name="filter" {...p} />;
        const ArrowUpDown = (p) => <Icon name="arrow-up-down" {...p} />;
        const CalendarDays = (p) => <Icon name="calendar-days" {...p} />;
        const Clock = (p) => <Icon name="clock" {...p} />;
        const FileCheck = (p) => <Icon name="file-check" {...p} />;
        const AlertCircle = (p) => <Icon name="alert-circle" {...p} />;
        const Terminal = (p) => <Icon name="terminal" {...p} />;
        const ClipboardList = (p) => <Icon name="clipboard-list" {...p} />;
        const Eraser = (p) => <Icon name="eraser" {...p} />;
        const Scan = (p) => <Icon name="scan" {...p} />;
        const XSquare = (p) => <Icon name="x-square" {...p} />;
        const Globe = (p) => <Icon name="globe" {...p} />;
        const FileText = (p) => <Icon name="file-text" {...p} />;
        const SendHorizontal = (p) => <Icon name="send-horizontal" {...p} />;
        const Code = (p) => <Icon name="code" {...p} />;
        const Book = (p) => <Icon name="book" {...p} />;
        const ArrowLeft = (p) => <Icon name="arrow-left" {...p} />;
        const FileSignature = (p) => <Icon name="file-signature" {...p} />;
        const ArrowRight = (p) => <Icon name="arrow-right" {...p} />;
        const LayoutDashboard = (p) => <Icon name="layout-dashboard" {...p} />;
        const Plus = (p) => <Icon name="plus" {...p} />;
        const Minus = (p) => <Icon name="minus" {...p} />;
        const Type = (p) => <Icon name="type" {...p} />;
        const Sheet = (p) => <Icon name="sheet" {...p} />;
        const ShieldAlert = (p) => <Icon name="shield-alert" {...p} />;
        const Fingerprint = (p) => <Icon name="fingerprint" {...p} />;
        const ShieldCheck = (p) => <Icon name="shield-check" {...p} />;
        const ExternalLink = (p) => <Icon name="external-link" {...p} />;
        const Trophy = (p) => <Icon name="trophy" {...p} />;

        // --- CONSTANTS ---
        const WORKER_URL = "sistema-professores.centrodeformacaorcc.workers.dev";
        const MACRO_URL = "https://script.google.com/macros/s/AKfycbx5Go-UGIcQvyA3vefhhl5Rc6-930cG9LsCRb1JPKzTHN5dNfBUCsD063K5RCyANGplEA/exec";

        const AUTH_GID = "1512246214";
        const HISTORY_GID = "552818815";
        const RANKING_GID = "726989113";
        const MANUAL_PROF_GID = "2125629446";
        const SLIDESHOW_GID = "661060277";
        const NOTICES_GID = "1523373356";
        const INIT_PROC_GID = "182309842";
        const LOGO_URL = "https://i.imgur.com/7Q1KoaM.png";

        const CLASSES = [
            { id: 'admin', name: 'Administração e Tecnologia do Fórum', gid: '0', description: 'Script da matéria Administração e Tecnologia do Fórum', icon: 'https://i.imgur.com/x8lj35t.png' },
            { id: 'mil_sci', name: 'Ciências Militares', gid: '971998757', description: 'Script da matéria Ciências Militares', icon: 'https://i.imgur.com/oO2aF2k.png' },
            { id: 'mil_career', name: 'Carreira Militar', gid: '303472444', description: 'Script da matéria Carreira Militar', icon: 'https://i.imgur.com/Na76QYn.png' },
            { id: 'practice', name: 'Práticas Militares e Legislação', gid: '1700831677', description: 'Script da matéria Práticas Militares e Legislação', icon: 'https://i.imgur.com/lR1RzIE.png' },
        ];

        const CLASS_TYPES_FEEDBACK = [
            { id: 'admin', name: 'Administração e Tecnologia do Fórum', maxScore: 6 },
            { id: 'mil_sci', name: 'Ciências Militares', maxScore: 5 },
            { id: 'mil_career', name: 'Carreira Militar', maxScore: 5 },
            { id: 'practice', name: 'Práticas Militares e Legislação', maxScore: 4 },
        ];

        // --- TOAST NOTIFICATIONS ---
        const ToastContainer = ({ toasts, removeToast }) => {
            return (
                <div className="fixed top-24 right-4 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
                    {toasts.map(toast => (
                        <div key={toast.id} className={`pointer-events-auto bg-white dark:bg-[#1a231d] text-slate-800 dark:text-white px-5 py-4 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex items-start gap-4 border-l-4 animate-slide-in ${toast.type === 'success' ? 'border-green-500' : toast.type === 'error' ? 'border-red-500' : 'border-blue-500'}`}>
                            <div className={`mt-0.5 shrink-0 ${toast.type === 'success' ? 'text-green-500' : toast.type === 'error' ? 'text-red-500' : 'text-blue-500'}`}>
                                {toast.type === 'success' ? <CheckCircle2 size={20} /> : toast.type === 'error' ? <AlertTriangle size={20} /> : <Info size={20} />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-1 ${toast.type === 'success' ? 'text-green-600 dark:text-green-400' : toast.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>{toast.title}</h4>
                                <p className="text-xs font-medium leading-relaxed opacity-90 break-words">{toast.message}</p>
                            </div>
                            <button onClick={() => removeToast(toast.id)} className="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            );
        };

        // --- SERVICES ---
        const parseCSVLine = (text) => {
            const result = [];
            let start = 0;
            let inQuotes = false;
            const delimiter = '\t';
            for (let i = 0; i < text.length; i++) {
                if (text[i] === '"') inQuotes = !inQuotes;
                else if (text[i] === delimiter && !inQuotes) {
                    let field = text.substring(start, i);
                    if (field.startsWith('"') && field.endsWith('"')) field = field.substring(1, field.length - 1).replace(/""/g, '"');
                    result.push(field.trim());
                    start = i + 1;
                }
            }
            let lastField = text.substring(start);
            if (lastField.startsWith('"') && lastField.endsWith('"')) lastField = lastField.substring(1, lastField.length - 1).replace(/""/g, '"');
            result.push(lastField.trim());
            return result;
        };

        const fetchCSV = async (gid) => {
            if (!gid) throw new Error('GID ausente para requisição.');
            const url = `${WORKER_URL}?gid=${gid}&format=tsv`;
            try {
                const response = await fetch(url, { method: 'GET', cache: 'no-store' });
                if (!response.ok) throw new Error(`Falha HTTP ${response.status}`);
                const text = await response.text();
                if (!text || text.trim() === '') return [];
                return text.split(/\r?\n/).map(parseCSVLine);
            } catch (error) {
                console.error("Fetch Error Detail:", error);
                throw new Error('Erro ao buscar dados do Worker');
            }
        };

        const getForumUsername = async () => {
            try {
                const response = await fetch("/forum", { cache: "no-store" });
                const html = await response.text();

                // Regex to find username in forum source code
                const regex = /_userdata\["username"\]\s*=\s*"([^"]+)"/;
                const match = html.match(regex);

                if (match && match[1]) {
                    return match[1];
                } else {
                    return null;
                }
            } catch (err) {
                console.error("Erro ao buscar username:", err);
                return null;
            }
        };

        const loginUser = async (nickname) => {
            try {
                const rows = await fetchCSV(AUTH_GID);
                const normalizedNick = nickname.toLowerCase().trim();

                for (const row of rows) {
                    // Verificação Padrão: A (Cargo) e B (Nick) - Indices 0 e 1
                    if (row.length >= 2) {
                        const name = row[1];
                        if (name && name.toLowerCase().trim() === normalizedNick) return { nickname: name, role: row[0] };
                    }
                    // Verificação Especial: C (Órgão) e D (Nick) - Indices 2 e 3
                    if (row.length >= 4) {
                        const specialName = row[3];
                        if (specialName && specialName.toLowerCase().trim() === normalizedNick) return { nickname: specialName, role: row[2] || 'Membro Especial' };
                    }
                }
                return null;
            } catch (error) {
                console.error("Login Error:", error);
                throw error;
            }
        };

        const fetchClassContent = async (gid) => {
            try {
                const rows = await fetchCSV(gid);
                return rows.map(row => ({
                    tag: row[0]?.toLowerCase().trim() || '',
                    content: row[1] || '',
                    extra: row[2] || ''
                })).filter(r => r.tag !== '');
            } catch (error) {
                console.error("Content Fetch Error:", error);
                throw error;
            }
        };

        const fetchClassHistory = async () => {
            try {
                const rows = await fetchCSV(HISTORY_GID);
                if (!rows || rows.length < 2) return [];
                return rows.slice(1).map(row => {
                    let className = row[2] || '';
                    const classType = row[3] || '';
                    
                    // Lógica para adicionar o tipo (Aula ou Atividade) se for ADM
                    if (className === 'Administração e Tecnologia do Fórum' && classType) {
                        className = `${className} - ${classType}`;
                    }

                    return {
                        endTime: row[0] || '',
                        startTime: row[1] || '',
                        className: className,
                        professor: row[4] || '',
                        students: row[5] || '',
                        verdict: row[8] || ''
                    };
                }).filter(entry => entry.className !== '');
            } catch (error) {
                console.error("History Fetch Error:", error);
                return [];
            }
        };

        const fetchRanking = async () => {
            try {
                const rows = await fetchCSV(RANKING_GID);
                if (!rows || rows.length < 1) return { headers: [], data: [] };
                // Supondo A1:G, headers na linha 0
                const headers = rows[0].slice(0, 7);
                const data = rows.slice(1).map(row => row.slice(0, 7));
                return { headers, data };
            } catch (error) {
                console.error("Ranking Fetch Error:", error);
                return { headers: [], data: [] };
            }
        };

        const sendPrivateMessage = async (username, subject, message) => {
            try {
                const composeResp = await fetch('/privmsg?mode=post', {
                    credentials: 'same-origin',
                    headers: { 'Cache-Control': 'no-store, no-cache' }
                });
                if (!composeResp.ok) return false;

                const html = await composeResp.text();
                const dom = new DOMParser().parseFromString(html, 'text/html');

                const form = dom.querySelector('form[action*="/privmsg"]');
                if (!form) {
                    console.error("Formulário de MP não encontrado.");
                    return false;
                }

                const formData = new FormData();
                let hasUsernameArrayField = false;

                form.querySelectorAll('input, textarea, select').forEach(el => {
                    const name = el.getAttribute('name');
                    if (!name || name === 'message' || name === 'subject') return;
                    if (name === 'username[]') hasUsernameArrayField = true;
                    if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
                    if (el.type === 'submit') return;
                    formData.append(name, el.value || '');
                });

                if (hasUsernameArrayField) formData.set('username[]', username);
                else formData.set('username', username);

                formData.set('subject', subject);
                formData.set('message', message);

                const submitBtn = form.querySelector('input[type="submit"][name="post"]');
                formData.set('post', submitBtn ? submitBtn.value : 'Enviar');

                const action = form.getAttribute('action') || '/privmsg';
                const sendResp = await fetch(action, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });

                if (!sendResp.ok) {
                    console.error(`Erro no envio da MP: ${sendResp.status}`);
                    return false;
                }

                const textLower = (await sendResp.text()).toLowerCase();
                if (textLower.includes('não existe') || textLower.includes('flood')) {
                    console.error("Erro de Flood ou Usuário inexistente.");
                    return false;
                }

                console.log(`MP enviada para: ${username}`);
                return true;
            } catch (error) {
                console.error("Exceção ao enviar MP:", error);
                return false;
            }
        };

        const postToForumTopic = async (topicId, message) => {
            try {
                const outputUrl = `/post?t=${topicId}&mode=reply`;
                const loadResp = await fetch(outputUrl, {
                    credentials: 'same-origin',
                    headers: { 'Cache-Control': 'no-store, no-cache' }
                });

                if (!loadResp.ok) throw new Error(`Erro ao carregar formulário (Status: ${loadResp.status})`);

                const html = await loadResp.text();
                const dom = new DOMParser().parseFromString(html, 'text/html');

                const form = dom.querySelector('form[action="/post"]');
                if (!form) throw new Error("Formulário de postagem não encontrado no DOM.");

                const formData = new FormData();
                form.querySelectorAll('input, textarea, select').forEach(el => {
                    const name = el.getAttribute('name');
                    if (!name) return;
                    if (name === 'message' || name === 'preview') return;
                    if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
                    formData.append(name, el.value || '');
                });

                formData.set('message', message);
                formData.set('t', topicId);
                formData.set('mode', 'reply');
                if (!formData.has('post')) formData.set('post', 'Enviar');

                const sendResp = await fetch('/post', {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });

                if (!sendResp.ok) throw new Error(`Erro na requisição POST (Status: ${sendResp.status})`);

                const respText = (await sendResp.text()).toLowerCase();

                if (respText.includes('flood')) {
                    throw new Error('Flood detectado - aguarde antes de tentar novamente.');
                }
                if (respText.includes('não existe') || respText.includes('tópico trancado')) {
                    throw new Error('Tópico inexistente ou trancado.');
                }

                return true;

            } catch (error) {
                throw error;
            }
        };

        const postToSheet = async (dataPayload) => {
            try {
                const body = {
                    action: "append_row",
                    gid: "0",
                    data: dataPayload
                };

                const response = await fetch(MACRO_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(body)
                });

                if (!response.ok) {
                    throw new Error(`Erro ao enviar dados para a planilha: ${response.status}`);
                }
                return true;
            } catch (error) {
                console.error("Erro ao postar na planilha:", error);
                throw error;
            }
        };

        // --- LOGIC HELPERS ---
        const generateId = () => Math.random().toString(36).substr(2, 9);
        const parseRowsToBlocks = (rows) => {
            let i = 0;
            const parseLevel = (untilTags = [], parentId = undefined) => {
                const currentBlocks = [];
                while (i < rows.length) {
                    const row = rows[i];
                    const tag = row.tag.toLowerCase();
                    if (untilTags.includes(tag)) return currentBlocks;
                    const currentId = generateId();
                    if (tag === 's1') {
                        i++; const children = parseLevel(['s2'], currentId);
                        currentBlocks.push({ id: currentId, parentId: parentId, type: 'group', tag: 's1', content: row.content, extra: row.extra, children, level: 1 });
                        i++;
                    } else if (tag === 's3') {
                        i++; const children = parseLevel(['s4'], currentId);
                        currentBlocks.push({ id: currentId, parentId: parentId, type: 'group', tag: 's3', content: row.content, extra: row.extra, children, level: 2 });
                        i++;
                    } else if (tag === 's2' || tag === 's4') return currentBlocks;
                    else { currentBlocks.push({ id: currentId, parentId: parentId, type: 'leaf', tag: tag, content: row.content, extra: row.extra }); i++; }
                }
                return currentBlocks;
            };
            return parseLevel();
        };
        const getRoleLevel = (role) => {
            return 1;
        };
        const parseDateHelper = (dateStr) => {
            try {
                const [datePart, timePart] = dateStr.split(' ');
                if (!datePart) return null;
                const [day, month, year] = datePart.split('/');
                const [hour, minute, second] = timePart ? timePart.split(':') : ['00', '00', '00'];
                return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second || 0));
            } catch (e) { return null; }
        };

        const stripTags = (str) => {
            if (!str) return '';
            let text = str.replace(/<br\s*\/?>/gi, ' ');
            return text.replace(/<[^>]+>/g, '');
        };

        const convertBBCodeToHtml = (text) => {
            if (!text) return '';
            return text
                .replace(/\[b\]/gi, '<b>').replace(/\[\/b\]/gi, '</b>')
                .replace(/\[i\]/gi, '<i>').replace(/\[\/i\]/gi, '</i>')
                .replace(/\[u\]/gi, '<u>').replace(/\[\/u\]/gi, '</u>')
                .replace(/\[color=([^\]]+)\]/gi, '<color=$1>').replace(/\[\/color\]/gi, '</color>')
                .replace(/\[url=([^\]]+)\]/gi, '<a href="$1">').replace(/\[\/url\]/gi, '</a>')
                .replace(/\[br\]/gi, '<br>');
        };

        // --- RICH TEXT RENDERER ---
        const RichText = ({ text, className }) => {
            if (!text) return null;

            // Enhanced Regex to handle optional attributes like target="_self" which were breaking the previous parser
            const parts = text.split(/(<\/?(?:b|i|u|a(?: [^>]+)?|color(?:=[^>]+)?|br)\s*\/?>)/gi);
            let currentStyle = { fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', color: 'inherit' };
            const colorStack = [];
            let currentLink = null;
            let currentTarget = '_blank';

            return (
                <span className={className}>
                    {parts.map((part, i) => {
                        if (!part) return null;
                        const lowerPart = part.toLowerCase();
                        if (lowerPart.match(/^<b\s*\/?>$/)) { currentStyle.fontWeight = 'bold'; return null; }
                        if (lowerPart === '</b>') { currentStyle.fontWeight = 'normal'; return null; }
                        if (lowerPart.match(/^<i\s*\/?>$/)) { currentStyle.fontStyle = 'italic'; return null; }
                        if (lowerPart === '</i>') { currentStyle.fontStyle = 'normal'; return null; }
                        if (lowerPart.match(/^<u\s*\/?>$/)) { currentStyle.textDecoration = 'underline'; return null; }
                        if (lowerPart === '</u>') { currentStyle.textDecoration = 'none'; return null; }

                        const colorMatch = part.match(/^<color=([^>]+)>$/i);
                        if (colorMatch) { colorStack.push(currentStyle.color); currentStyle.color = colorMatch[1]; return null; }
                        if (lowerPart === '</color>') { currentStyle.color = colorStack.pop() || 'inherit'; return null; }

                        // Improved Link Matcher to extract href and target if present
                        if (lowerPart.startsWith('<a ')) {
                            const hrefMatch = part.match(/href=["']?([^"'\s>]+)["']?/i);
                            const targetMatch = part.match(/target=["']?([^"'\s>]+)["']?/i);

                            if (hrefMatch) {
                                currentLink = hrefMatch[1];
                                // If user explicitly sets target or it's an internal link (starts with #), use _self or user value
                                if (targetMatch) {
                                    currentTarget = targetMatch[1];
                                } else if (currentLink.startsWith('#')) {
                                    currentTarget = '_self';
                                } else {
                                    currentTarget = '_blank';
                                }
                            }
                            return null;
                        }
                        if (lowerPart === '</a>') { currentLink = null; currentTarget = '_blank'; return null; }
                        if (lowerPart.match(/^<br\s*\/?>$/)) { return <br key={i} />; }

                        if (currentLink) {
                            return (
                                <a
                                    key={i}
                                    href={currentLink}
                                    style={{ ...currentStyle, textDecoration: 'underline' }}
                                    target={currentTarget}
                                    rel={currentTarget === '_blank' ? "noreferrer" : undefined}
                                    className="text-blue-600 dark:text-blue-400 hover:text-brand hover:opacity-80 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {part}
                                </a>
                            );
                        }
                        return <span key={i} style={{ ...currentStyle }}>{part}</span>;
                    })}
                </span>
            );
        };

        // --- COMPONENTS ---
        const BrandHeader = () => (
            <div className="flex items-center gap-3 lg:gap-4 select-none">
                <div className="relative"><img src={LOGO_URL} alt="CFO" className="h-7 lg:h-12 w-auto drop-shadow-lg" /></div>
                <div className="hidden md:flex flex-col leading-none">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-condensed font-bold text-slate-900 dark:text-white italic tracking-tighter">CENTRO</span>
                        <span className="text-sm font-serif italic text-brand">de</span>
                        <span className="text-2xl font-condensed font-bold text-slate-900 dark:text-white italic tracking-tighter">FORMAÇÃO</span>
                    </div>
                    <div className="flex items-baseline gap-1.5 -mt-1">
                        <span className="text-sm font-serif italic text-brand">de</span>
                        <span className="text-xl font-display uppercase text-slate-900 dark:text-white tracking-widest">OFICIAIS</span>
                    </div>
                </div>
            </div>
        );

        const Slideshow = () => {
            const [current, setCurrent] = useState(0);
            const [slidesData, setSlidesData] = useState([]);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                const fetchSlides = async () => {
                    try {
                        const rows = await fetchCSV(SLIDESHOW_GID);
                        const images = rows.map(r => r[0]).filter(url => url && url.startsWith('http'));
                        setSlidesData(images);
                    } catch (e) {
                        console.error("Failed to load slides", e);
                    } finally {
                        setLoading(false);
                    }
                };
                fetchSlides();
            }, []);

            useEffect(() => {
                if (slidesData.length === 0) return;
                const timer = setInterval(() => setCurrent(c => (c + 1) % slidesData.length), 6000);
                return () => clearInterval(timer);
            }, [slidesData.length]);

            if (loading || slidesData.length === 0) {
                return (
                    <div className="w-full h-[180px] sm:h-[250px] md:h-[380px] bg-[#0a0f0b] rounded-sm relative overflow-hidden group shadow-2xl border-y border-brand/20 mb-10 flex items-center justify-center">
                        <Loader2 className="animate-spin text-brand" size={32} />
                    </div>
                );
            }

            return (
                <div className="w-full h-[180px] sm:h-[250px] md:h-[380px] bg-[#0a0f0b] rounded-sm relative overflow-hidden group shadow-2xl border-y border-brand/20 mb-10">
                    {slidesData.map((url, i) => (
                        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                            <div className="relative w-full h-full bg-[#0a0f0b] flex items-center justify-center overflow-hidden">
                                <img src={url} className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {slidesData.map((_, i) => (
                            <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-brand' : 'w-2 bg-white/20 hover:bg-white/40'}`} ></button>
                        ))}
                    </div>

                    <button onClick={() => setCurrent(c => (c - 1 + slidesData.length) % slidesData.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/20 hover:text-white hover:bg-black/30 rounded-full transition-all opacity-0 group-hover:opacity-100"><ArrowLeft size={24} /></button>
                    <button onClick={() => setCurrent(c => (c + 1) % slidesData.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/20 hover:text-white hover:bg-black/30 rounded-full transition-all opacity-0 group-hover:opacity-100"><ArrowRight size={24} /></button>
                </div>
            );
        };

        const NoticeBoard = () => {
            const [data, setData] = useState({ title: 'Carregando...', message: '...' });

            useEffect(() => {
                const load = async () => {
                    try {
                        const rows = await fetchCSV(NOTICES_GID);
                        if (rows.length >= 2) {
                            setData({ title: rows[1][0] || 'Aviso', message: rows[1][1] || '' });
                        } else {
                            setData({ title: 'Sem avisos', message: '' });
                        }
                    } catch (e) {
                        setData({ title: 'Erro de conexão', message: 'Não foi possível carregar os avisos.' });
                    }
                };
                load();
            }, []);

            return (
                <div className="bg-[#1c261e] p-6 md:p-8 text-white flex flex-col justify-end relative overflow-hidden shadow-tactical border border-brand/20 rounded-sm h-full min-h-[250px]">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><img src={LOGO_URL} className="h-40 w-auto grayscale" /></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4 text-brand-accent">
                            <AlertCircle size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest">Quadro de Avisos</span>
                        </div>
                        <h3 className="text-xl font-condensed font-bold uppercase tracking-wide text-white mb-2">{data.title}</h3>
                        <p className="text-xs font-medium opacity-70 leading-relaxed whitespace-pre-wrap">{data.message}</p>
                    </div>
                </div>
            );
        };

        const Navbar = ({ user, onMenuClick, currentView, navigateTo, menuItems, theme, toggleTheme }) => {
            const [activeDropdown, setActiveDropdown] = useState(null);
            const userLevel = user ? getRoleLevel(user.role) : 0;
            const dropdownRef = useRef(null);
            const getHabboAvatar = (nickname) => `https://www.habbo.com.br/habbo-imaging/avatarimage?user=${nickname}&direction=3&head_direction=3&gesture=sml&size=m&headonly=1`;

            useEffect(() => {
                const handleClickOutside = (event) => {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setActiveDropdown(null);
                };
                document.addEventListener('mousedown', handleClickOutside);
                return () => document.removeEventListener('mousedown', handleClickOutside);
            }, []);

            return (
                <header className="h-14 lg:h-20 bg-white dark:bg-[#121813] shadow-md sticky top-0 z-[900] px-3 lg:px-8 flex items-center justify-between transition-colors duration-300 border-b-[3px] lg:border-b-4 border-brand">
                    <div className="flex items-center gap-3 lg:gap-8">
                        <button onClick={onMenuClick} className="lg:hidden p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded transition-colors"><Menu size={20} /></button>
                        <BrandHeader />
                        {user && (
                            <nav className="hidden lg:flex items-center gap-2 ml-8" ref={dropdownRef}>
                                <button
                                    onClick={() => navigateTo('home')}
                                    className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ease-out ${currentView === 'home' ? 'bg-brand text-white shadow-md pl-4 pr-5' : 'text-slate-400 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                >
                                    <CustomHomeIcon size={20} className={`shrink-0 transition-transform duration-300 ${currentView !== 'home' && 'group-hover:scale-110'}`} />
                                    <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-out ${currentView === 'home' ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100'}`}>
                                        <span className="text-xs font-bold uppercase tracking-widest font-condensed pl-1">Início</span>
                                    </span>
                                </button>

                                <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>

                                {menuItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => navigateTo(item.id)}
                                        className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ease-out ${currentView === item.id ? 'bg-brand/10 text-brand ring-1 ring-brand/20 pl-4 pr-5' : 'text-slate-400 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                    >
                                        <div className={`shrink-0 transition-transform duration-300 ${currentView !== item.id && 'group-hover:scale-110'}`}>
                                            {React.createElement(item.icon, { size: 20 })}
                                        </div>
                                        <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-out ${currentView === item.id ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100'}`}>
                                            <span className="text-xs font-bold uppercase tracking-widest font-condensed pl-1">{item.label}</span>
                                        </span>
                                    </button>
                                ))}
                            </nav>
                        )}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button onClick={toggleTheme} className="hidden lg:flex items-center justify-center w-10 h-10 rounded bg-slate-100 dark:bg-[#0a0f0b] text-slate-600 dark:text-slate-300 hover:bg-brand hover:text-white transition-colors" title="Alternar Tema">{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</button>
                        {user && (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 pl-2 cursor-pointer hover:opacity-80 transition-opacity">
                                    <div className="text-right hidden xl:block">
                                        <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight font-condensed uppercase">{user.nickname}</p>
                                        <p className="text-[10px] text-brand font-bold uppercase tracking-widest leading-tight mt-0.5">{user.role}</p>
                                    </div>
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 dark:bg-[#0a0f0b] rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-slate-300 dark:border-white/10">
                                        <img src={getHabboAvatar(user.nickname)} alt={user.nickname} className="scale-110" onError={(e) => { (e.target).style.display = 'none'; }} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </header>
            );
        };

        const CopyableText = ({ block, status, onInteract, attachedAnswer, processedContent, textSizeClass }) => {
            const [copied, setCopied] = useState(false);
            const isTitle = block.tag === 'title';
            const isQuestion = block.tag === 'p';

            const handleInteraction = (e) => {
                e.stopPropagation();
                const textToCopy = stripTags(processedContent || '');
                navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                onInteract(block.id);
            };

            if (isTitle) {
                return (
                    <div onClick={handleInteraction} className={`flex items-end justify-between py-4 mt-10 mb-6 gap-4 border-b border-brand/10 select-none group cursor-pointer hover:bg-brand/5 rounded-sm px-4 transition-all duration-200`}>
                        <div className="flex items-center gap-4 w-full">
                            <div className="h-6 w-1.5 bg-brand rounded-full"></div>
                            <h3 className={`font-poppins font-semibold text-2xl uppercase tracking-tight leading-none ${status.isSkipped ? 'text-red-600' : 'text-slate-800 dark:text-white group-hover:text-brand'}`}><RichText text={processedContent} /></h3>
                        </div>
                        <div className={`text-slate-300 group-hover:text-brand transition-colors`}>{copied ? <CheckCircle size={24} className="text-green-600" /> : <Copy size={20} />}</div>
                    </div>
                );
            }

            if (isQuestion) {
                return (
                    <div className="mb-3 group">
                        <div
                            onClick={handleInteraction}
                            className={`
                        flex gap-4 items-start px-4 py-3 rounded-md cursor-pointer transition-all duration-200 border border-transparent
                        ${status.isSkipped
                                    ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20'
                                    : status.isClicked
                                        ? 'opacity-60'
                                        : 'bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-[#151b17] hover:shadow-sm hover:border-slate-100 dark:hover:border-white/10'
                                }
                    `}
                        >
                            <div className="shrink-0 mt-1">
                                {status.isClicked
                                    ? <CheckCircle2 size={18} className="text-brand opacity-70" />
                                    : status.isSkipped
                                        ? <AlertCircle size={18} className="text-red-500 opacity-70" />
                                        : <div className={`w-4 h-4 rounded-full border-2 ${status.isClicked ? 'border-brand' : 'border-slate-300 dark:border-slate-600 group-hover:border-brand'} transition-colors`}></div>
                                }
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                                <p className={`${textSizeClass} font-poppins font-medium leading-relaxed text-slate-800 dark:text-slate-100 ${status.isClicked ? 'line-through decoration-slate-400/50 text-slate-500' : ''}`}>
                                    <RichText text={processedContent} />
                                </p>
                                {attachedAnswer && (
                                    <div className={`mt-2 ${status.isSkipped ? 'opacity-50' : ''} border-l-2 border-brand/20 pl-3 ml-1`}>
                                        <p className="text-sm font-poppins text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                            <RichText text={attachedAnswer.content} />
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="shrink-0 self-start mt-0.5">
                                <button className={`p-2 rounded hover:bg-brand/10 transition-colors ${copied ? 'text-green-600' : 'text-slate-300 hover:text-brand'}`}>
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }

            return (
                <div className={`relative flex items-center justify-between py-2 mb-1 gap-4 group px-4 rounded-sm transition-all duration-200 cursor-pointer ${status.isClicked ? 'opacity-50' : status.isSkipped ? 'bg-red-50/50' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`} onClick={handleInteraction}>
                    <div className="w-full flex items-start gap-3">
                        <div className={`shrink-0 mt-2 w-1.5 h-1.5 rounded-full ${status.isClicked ? 'bg-brand/30' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-brand'}`}></div>
                        <div className={`font-poppins ${textSizeClass} leading-relaxed whitespace-pre-wrap break-words font-normal ${status.isClicked ? 'line-through decoration-slate-300 text-slate-500' : 'text-slate-700 dark:text-slate-300'}`}><RichText text={processedContent} /></div>
                    </div>
                    <div className={`shrink-0 ${copied ? 'text-green-600' : 'text-slate-300 hover:text-brand'}`}>{copied ? <Check size={16} /> : <Copy size={16} />}</div>
                </div>
            );
        };

        const PrivateMessage = ({ block, status, onInteract }) => {
            const [isOpen, setIsOpen] = useState(false);
            const [nickname, setNickname] = useState('');
            const [sendState, setSendState] = useState('idle');
            const [progressText, setProgressText] = useState('Enviar');
            const [sentRecipient, setSentRecipient] = useState(null);

            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            const handleSend = async () => {
                if (!nickname.trim()) return;

                const subject = block.content || "Mensagem do Instrutor";
                const rawMessage = block.extra || "";

                const recipients = nickname.split('/').map(n => n.trim()).filter(n => n.length > 0);

                if (recipients.length === 0) return;

                setSendState('sending');
                let successCount = 0;
                let failCount = 0;
                let failedNicks = [];

                for (let i = 0; i < recipients.length; i++) {
                    const recipient = recipients[i];

                    setProgressText(`(${i + 1}/${recipients.length}) Enviando para ${recipient}...`);

                    try {
                        const success = await sendPrivateMessage(recipient, subject, rawMessage);

                        if (success) {
                            successCount++;
                        } else {
                            failCount++;
                            failedNicks.push(recipient);
                            console.warn(`Falha ao enviar para ${recipient}.`);
                        }
                    } catch (error) {
                        failCount++;
                        failedNicks.push(recipient);
                    }

                    // DELAY AUMENTADO PARA 10 SEGUNDOS
                    if (i < recipients.length - 1) {
                        for (let s = 10; s > 0; s--) {
                            setProgressText(`Aguardando anti-spam... ${s}s`);
                            await delay(1000);
                        }
                    }
                }

                if (successCount > 0) {
                    onInteract(block.id);
                    setSentRecipient(recipients.join(', '));
                    setSendState('sent');
                    setProgressText('Concluído');

                    if (failCount > 0) {
                        alert(`Enviado para: ${successCount}.\nFalha ao enviar para: ${failedNicks.join(', ')}.`);
                    }

                    setTimeout(() => {
                        setIsOpen(false);
                        setSendState('idle');
                        setNickname('');
                        setProgressText('Enviar');
                    }, 2000);
                } else {
                    setSendState('idle');
                    setProgressText('Tentar Novamente');
                    alert(`Falha total. Nicks não enviados: ${failedNicks.join(', ')}.`);
                }
            };

            if (status.isClicked) {
                return (
                    <div className="my-4 animate-fade-in select-none">
                        <div className="bg-blue-500/5 dark:bg-blue-500/10 p-3 border-l-4 border-blue-500 rounded-r-sm flex items-center justify-between">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-1"><span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-condensed">MP Enviada</span><CheckCircle2 size={12} className="text-blue-500" /></div>
                                <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">Para: <span className="text-slate-900 dark:text-white font-bold">{sentRecipient}</span></div>
                            </div>
                        </div>
                    </div>
                );
            }

            if (!isOpen) {
                return (
                    <div className="my-6">
                        <button onClick={() => setIsOpen(true)} className="w-full flex items-center justify-between p-4 bg-brand/5 hover:bg-brand/10 border border-brand/20 hover:border-brand/40 rounded-sm transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand border border-brand/20 overflow-hidden"><img src="https://i.imgur.com/olTorAq.png" alt="" className="w-5 h-5 object-contain opacity-80" /></div>
                                <div className="text-left"><span className="block text-xs font-bold uppercase tracking-widest text-brand font-condensed">Mensagem Privada</span><span className="text-[10px] text-slate-500 font-mono italic truncate max-w-[200px] block font-poppins"><RichText text={block.content} /></span></div>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand flex items-center gap-1 transition-colors">Abrir <ChevronRight size={14} /></span>
                        </button>
                    </div>
                );
            }

            return (
                <div className="my-6 animate-fade-in bg-white dark:bg-[#0c120e] border border-brand/30 rounded-sm shadow-lg overflow-hidden relative">
                    <div className="bg-brand/10 px-4 py-2 flex items-center justify-between border-b border-brand/10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand font-condensed flex items-center gap-2"><Lock size={10} /> Mensagem Privada</span>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors"><X size={14} /></button>
                    </div>
                    <div className="p-4 flex flex-col md:flex-row gap-2">
                        <div className="flex-1 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Users size={16} /></div>
                            <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="NICK1 / NICK2 / NICK3" className="w-full bg-slate-100 dark:bg-[#0a0f0b] pl-10 pr-4 py-3 text-sm font-bold uppercase text-slate-900 dark:text-white placeholder-slate-400 outline-none border border-slate-200 dark:border-white/10 rounded-sm focus:border-brand focus:ring-1 focus:ring-brand font-condensed tracking-wide" autoFocus />
                        </div>
                        <button onClick={handleSend} disabled={!nickname.trim() || sendState !== 'idle'} className="px-6 py-3 md:py-0 bg-brand hover:bg-brand-hover text-white rounded-sm font-bold uppercase text-xs tracking-widest disabled:opacity-50 transition-all flex items-center justify-center min-w-[150px]">
                            {sendState === 'sending' ? (
                                <div className="flex items-center gap-2">
                                    <Loader2 size={14} className="animate-spin" />
                                    <span className="truncate max-w-[120px]">{progressText}</span>
                                </div>
                            ) : sendState === 'sent' ? <Check size={16} /> : 'Enviar'}
                        </button>
                    </div>
                </div>
            );
        };

        const Spoiler = ({ block, childrenNodes }) => {
            const [isOpen, setIsOpen] = useState(false);
            const isOuter = block.level === 1;
            const title = block.content && block.content.trim() !== '' ? block.content : (isOuter ? 'Conteúdo Classificado' : 'Informação Adicional');

            return (
                <div className={`my-4 rounded-md border ${isOuter ? 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/5' : 'border-slate-200/50 dark:border-white/5 bg-slate-50 dark:bg-black/20'} overflow-hidden shadow-sm transition-all duration-300`}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-white/5 ${isOpen ? 'border-b border-slate-100 dark:border-white/5' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-sm transition-all ${isOpen ? 'bg-brand text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-400'}`}>
                                <ChevronRight size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                            </div>
                            <span className={`font-poppins font-semibold uppercase tracking-wide ${isOuter ? 'text-sm text-slate-800 dark:text-white' : 'text-xs text-slate-600 dark:text-slate-300'}`}>
                                <RichText text={title} />
                            </span>
                        </div>
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="p-4 md:p-5 pt-2">
                                {childrenNodes}
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const ContentRenderer = ({ blocks, onSkipWarning, currentUser, textZoom = 0 }) => {
            const processedBlocks = useMemo(() => {
                const groupNodes = (nodes) => {
                    if (!nodes) return [];
                    const result = [];
                    let currentMexGroup = null;

                    for (let i = 0; i < nodes.length; i++) {
                        const node = nodes[i];

                        if (node.tag === 'mex') {
                            if (!currentMexGroup) {
                                currentMexGroup = { id: `mex-group-${node.id}`, tag: 'mex-group', items: [node] };
                                result.push(currentMexGroup);
                            } else {
                                currentMexGroup.items.push(node);
                            }
                            continue;
                        } else {
                            currentMexGroup = null;
                        }

                        if (node.tag === 'p') {
                            const nextNode = (i + 1 < nodes.length) ? nodes[i + 1] : null;
                            if (nextNode && nextNode.tag === 'rep') {
                                result.push({ id: `qa-group-${node.id}`, tag: 'qa-group', question: node, answer: nextNode });
                                i++;
                                continue;
                            }
                        }

                        if (node.children) {
                            result.push({ ...node, children: groupNodes(node.children) });
                        } else {
                            result.push(node);
                        }
                    }
                    return result;
                };
                return groupNodes(blocks);
            }, [blocks]);

            const processBlocks = (blocks) => { const nodeMap = new Map(); const sequence = []; const traverse = (nodes) => { nodes.forEach(node => { nodeMap.set(node.id, node); if (node.type === 'leaf' && ['line', 'title', 'p'].includes(node.tag || '')) sequence.push(node.id); if (node.children) traverse(node.children); }); }; traverse(blocks); return { nodeMap, sequence }; };
            const { nodeMap, sequence } = useMemo(() => processBlocks(blocks), [blocks]);
            const [clickedIds, setClickedIds] = useState(new Set());
            const skippedIds = useMemo(() => { if (clickedIds.size === 0) return new Set(); const skipped = new Set(); let maxIndex = -1; sequence.forEach((id, idx) => { if (clickedIds.has(id)) maxIndex = idx; }); if (maxIndex === -1) return skipped; for (let i = 0; i < maxIndex; i++) { const candidateId = sequence[i]; if (!clickedIds.has(candidateId)) skipped.add(candidateId); } return skipped; }, [clickedIds, sequence]);

            const handleInteract = useCallback((id) => {
                const indexInSeq = sequence.indexOf(id);
                if (indexInSeq !== -1) {
                    const firstUnclicked = sequence.findIndex(sid => !clickedIds.has(sid));
                    if (firstUnclicked !== -1 && indexInSeq > firstUnclicked) onSkipWarning();
                }
                setClickedIds(prev => { const n = new Set(prev); n.add(id); return n; });
            }, [sequence, clickedIds, onSkipWarning]);

            const zoomClass = useMemo(() => {
                if (textZoom === 0) return 'text-sm md:text-base';
                if (textZoom === 1) return 'text-base md:text-lg';
                return 'text-lg md:text-xl';
            }, [textZoom]);

            const processText = (text) => {
                if (!text || typeof text !== 'string') return text;
                let processed = text.replace(/{USERNAME}/g, currentUser?.nickname || 'Aluno');
                return convertBBCodeToHtml(processed);
            };

            const renderBlock = (block) => {
                const status = { isClicked: clickedIds.has(block.id), isSkipped: skippedIds.has(block.id) };
                const processedContent = processText(block.content);

                switch (block.tag) {
                    case 'mt':
                        return (
                            <div key={block.id} className="relative mt-20 mb-10 group">
                                <div className="absolute -top-6 -left-6 text-[5rem] md:text-[8rem] font-display font-bold text-brand/5 dark:text-brand/10 select-none z-0 pointer-events-none group-hover:text-brand/10 transition-colors">#</div>
                                <div className="relative z-10 pl-6 border-l-4 border-brand">
                                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none drop-shadow-sm">
                                        <RichText text={processedContent} />
                                    </h2>
                                </div>
                            </div>
                        );
                    case 'mst':
                        return (
                            <div key={block.id} className="mt-12 mb-6 flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-brand font-bold text-xs shadow-sm border border-slate-200 dark:border-white/10 group-hover:bg-brand group-hover:text-white transition-colors">
                                    <ChevronRight size={16} />
                                </div>
                                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide decoration-brand/30 decoration-2 underline-offset-4 group-hover:underline transition-all">
                                    <RichText text={processedContent} />
                                </h3>
                            </div>
                        );
                    case 'mtxt':
                        return (
                            <div key={block.id} className="mb-4 pl-0 md:pl-12">
                                <p className={`${zoomClass} text-slate-600 dark:text-slate-300 leading-relaxed font-poppins font-medium text-justify`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'minfo':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-6 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-sm p-4 md:p-5 flex gap-4 shadow-sm items-start">
                                <div className="shrink-0 mt-1 text-blue-500"><Info size={20} /></div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1 font-condensed">Nota Didática</h4>
                                    <div className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins`}>
                                        <RichText text={processedContent} />
                                    </div>
                                </div>
                            </div>
                        );
                    case 'malert':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-6 bg-red-50/50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-sm p-4 md:p-5 flex gap-4 shadow-sm items-start">
                                <div className="shrink-0 mt-1 text-red-500"><AlertTriangle size={20} /></div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-1 font-condensed">Ponto de Atenção</h4>
                                    <div className={`${zoomClass} font-bold text-red-900 dark:text-red-200 leading-relaxed font-poppins`}>
                                        <RichText text={processedContent} />
                                    </div>
                                </div>
                            </div>
                        );
                    case 'att1':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-6 bg-red-50/50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-sm p-4 md:p-5 flex gap-4 shadow-sm items-start">
                                <div className="shrink-0 mt-1 text-red-500"><AlertTriangle size={20} /></div>
                                <div>
                                    <div className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins font-medium`}>
                                        <RichText text={processedContent} />
                                    </div>
                                </div>
                            </div>
                        );
                    case 'mex-group':
                        return (
                            <div key={block.id} className="ml-0 md:ml-12 my-10 group">
                                <div className="relative">
                                    <div className="absolute -top-3 left-4 bg-brand text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest font-condensed rounded-sm shadow-md z-20 flex items-center gap-2">
                                        <Code size={10} className="text-brand-accent" />
                                        <span>{block.items.length > 1 ? 'Exemplos' : 'Exemplo'}</span>
                                    </div>
                                    <div className="bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-sm p-4 md:p-6 pt-8">
                                        <div className="flex flex-col gap-3">
                                            {block.items.map((item, idx) => (
                                                <div key={item.id} className={`${idx > 0 ? 'pt-3 border-t border-dashed border-slate-200 dark:border-white/10' : ''} flex gap-4 items-start`}>
                                                    <div className="shrink-0 text-brand font-bold font-mono text-xs mt-0.5 bg-brand/10 w-5 h-5 flex flex-col items-center justify-center rounded-full leading-none">{idx + 1}</div>
                                                    <div className={`flex-1 ${zoomClass} text-slate-600 dark:text-slate-300 font-medium leading-relaxed font-mono italic`}>
                                                        <RichText text={processText(item.content)} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    case 'mlist':
                        return (
                            <div key={block.id} className="ml-0 md:ml-16 mb-2 flex items-start gap-3 group">
                                <div className="mt-0.5 shrink-0 text-brand/60 group-hover:text-brand transition-colors"><CheckCircle2 size={16} /></div>
                                <p className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-justify flex-1`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'mpoin':
                        return (
                            <div key={block.id} className="ml-2 md:ml-16 mb-2 flex items-start gap-3 group">
                                <div className="mt-1.5 shrink-0 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full group-hover:bg-brand transition-colors"></div>
                                <p className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins text-justify flex-1`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'mpoin2':
                        return (
                            <div key={block.id} className="ml-2 md:ml-16 mb-2 flex items-start gap-3 group">
                                <p className={`${zoomClass} text-slate-700 dark:text-slate-300 leading-relaxed font-poppins text-justify`}>
                                    <RichText text={processedContent} />
                                </p>
                            </div>
                        );
                    case 'mbr': return <div key={block.id} className="h-6 w-full"></div>;
                    case 'br': return <div key={block.id} className="h-3 w-full"></div>;
                    case 'title':
                    case 'line': return <CopyableText key={block.id} block={block} status={status} onInteract={handleInteract} processedContent={processedContent} textSizeClass={zoomClass} />;
                    case 'p': return <CopyableText key={block.id} block={block} status={status} onInteract={handleInteract} processedContent={processedContent} textSizeClass={zoomClass} />;
                    case 'qa-group':
                        const qaStatus = { isClicked: clickedIds.has(block.question.id), isSkipped: skippedIds.has(block.question.id) };
                        return <CopyableText key={block.id} block={block.question} status={qaStatus} onInteract={handleInteract} attachedAnswer={block.answer} processedContent={processText(block.question.content)} textSizeClass={zoomClass} />;
                    case 'mp': return <PrivateMessage key={block.id} block={block} status={status} onInteract={handleInteract} />;
                    case 'att': return (
                        <div className="flex items-start gap-3 my-4 px-4 py-3 bg-emerald-50/50 dark:bg-emerald-900/10 border-l-2 border-emerald-500/50 rounded-r-sm">
                            <div className="mt-0.5 shrink-0 opacity-80"><img src="https://i.imgur.com/Nzo9Lg1.png" className="w-4 h-4 object-contain" /></div>
                            <span className="text-sm font-poppins font-medium leading-relaxed text-emerald-900 dark:text-emerald-200"><RichText text={processedContent} /></span>
                        </div>
                    );
                    case 'rep': return (
                        <div className="ml-4 md:ml-8 my-2 pl-4 border-l-2 border-slate-200 dark:border-white/10">
                            <p className={`${zoomClass} text-slate-600 dark:text-slate-400 leading-relaxed font-poppins`}>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-2 select-none font-condensed">Resposta:</span>
                                <span className="italic"><RichText text={processedContent} /></span>
                            </p>
                        </div>
                    );
                    case 's1':
                    case 's3': return <Spoiler key={block.id} block={block} childrenNodes={block.children?.map(child => renderBlock(child))} />;
                    default: return null;
                }
            };
            return <div className="w-full">{processedBlocks.map(block => renderBlock(block))}</div>;
        };

        const ClassFeedbackForm = ({ professor, initialClassId, initialStartTime, initialStudent, initialVerdict, initialComments, initialScore, addToast }) => {
            const [selectedType, setSelectedType] = useState(CLASS_TYPES_FEEDBACK[0]);
            const [isAdminActivity, setIsAdminActivity] = useState(false);
            const [students, setStudents] = useState('');
            const [verdicts, setVerdicts] = useState({});
            const [individualScores, setIndividualScores] = useState({});
            const [individualComments, setIndividualComments] = useState({});
            const [startTime, setStartTime] = useState(new Date());
            const [isSendingSheet, setIsSendingSheet] = useState(false);
            
            // Custom Select Dropdown States
            const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
            const classDropdownRef = useRef(null);

            const studentList = useMemo(() => {
                if (!students.trim()) return [];
                return students.split('/').map(s => s.trim()).filter(s => s.length > 0);
            }, [students]);

            useEffect(() => {
                if (initialClassId) {
                    const type = CLASS_TYPES_FEEDBACK.find(t => t.id === initialClassId) || CLASS_TYPES_FEEDBACK[0];
                    setSelectedType(type);
                    if (initialClassId === 'admin_activity') {
                        const adminType = CLASS_TYPES_FEEDBACK.find(t => t.id === 'admin');
                        if (adminType) setSelectedType(adminType);
                        setIsAdminActivity(true);
                    }
                }
                if (initialStartTime) setStartTime(initialStartTime);
                if (initialStudent) setStudents(initialStudent);
            }, [initialClassId, initialStartTime, initialStudent]);

            useEffect(() => {
                if (studentList.length > 0) {
                    setVerdicts(prev => {
                        const next = { ...prev };
                        studentList.forEach(s => {
                            if (!next[s]) next[s] = initialVerdict || 'Aprovado';
                        });
                        return next;
                    });
                    setIndividualScores(prev => {
                        const next = { ...prev };
                        studentList.forEach(s => {
                            if (next[s] === undefined) next[s] = initialScore || (isAdminActivity ? 'Sim' : '0');
                        });
                        return next;
                    });
                    setIndividualComments(prev => {
                        const next = { ...prev };
                        studentList.forEach(s => {
                            if (next[s] === undefined) next[s] = initialComments || '';
                        });
                        return next;
                    });
                }
            }, [studentList, initialVerdict, initialComments, initialScore, isAdminActivity]);

            // Handle outside click for custom dropdown
            useEffect(() => {
                const handleClickOutside = (event) => {
                    if (classDropdownRef.current && !classDropdownRef.current.contains(event.target)) {
                        setIsClassDropdownOpen(false);
                    }
                };
                document.addEventListener('mousedown', handleClickOutside);
                return () => document.removeEventListener('mousedown', handleClickOutside);
            }, []);

            const handlePostAndProcess = async () => {
                if (studentList.length === 0) return addToast('error', 'Erro', "Adicione alunos antes de enviar.");
                setIsSendingSheet(true);

                try {
                    // 1. Send data to Sheet
                    const now = new Date();
                    const payload = studentList.map(student => {
                        const verdict = verdicts[student] || 'Aprovado';
                        const scoreVal = individualScores[student] || (isAdminActivity ? 'Sim' : '0');

                        // Lógica para coluna I (Status)
                        let statusFinal = verdict;
                        if (isAdminActivity) {
                            statusFinal = verdict === 'Aprovado' ? 'Aprovado na Atividade' : 'Reprovado na Atividade';
                        }

                        // Lógica para Coluna G (Envio da Atividade)
                        const activitySent = isAdminActivity ? scoreVal : " ";
                        const finalScore = isAdminActivity ? "" : scoreVal;

                        return {
                            "Carimbo de data/hora": now.toLocaleString('pt-BR'),
                            "Início": isAdminActivity ? "-" : startTime.toLocaleString('pt-BR'),
                            "Aula aplicada": selectedType.name,
                            "Tipo": isAdminActivity ? "Atividade" : "Aula",
                            "Professor(a)": professor.nickname,
                            "Aluno(a)": student,
                            "Envio da atividade": activitySent,
                            "Comentários/Observações": individualComments[student] || '',
                            "Status": statusFinal,
                            "Pontuação": finalScore
                        };
                    });

                    await postToSheet(payload);

                    // 2. Check for Admin Activity Failures and Send MPs (Integrated Action)
                    let mpMessage = "";
                    if (isAdminActivity) {
                        const failedStudents = studentList.filter(s => (individualScores[s] || 'Sim') === 'Não');

                        if (failedStudents.length > 0) {
                            try {
                                const resp = await fetch('https://raw.githubusercontent.com/brendonrcc/CFOmps/refs/heads/main/cfoinsa');
                                if (!resp.ok) throw new Error('Template load failed');
                                const template = await resp.text();

                                let sentCount = 0;
                                let errorCount = 0;

                                for (const student of failedStudents) {
                                    // Must fetch bbcode and send MP
                                    const success = await sendPrivateMessage(student, '[CFO] Reprovação na Atividade', template);
                                    if (success) sentCount++; else errorCount++;
                                }

                                mpMessage = ` | ${sentCount} MP(s) enviada(s).`;
                                if (errorCount > 0) mpMessage += ` Falha em ${errorCount}.`;
                            } catch (e) {
                                console.error(e);
                                mpMessage = " | Erro ao carregar MP.";
                            }
                        }
                    }

                    addToast('success', 'Sucesso', `Dados postados na planilha.${mpMessage}`);

                } catch (error) {
                    addToast('error', 'Erro', "Falha ao enviar para a planilha. Tente novamente.");
                } finally {
                    setIsSendingSheet(false);
                }
            };

            const formatDateTimeForInput = (date) => { const d = new Date(date); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 16); };

            const updateStudentData = (student, field, value) => {
                if (field === 'verdict') setVerdicts(prev => ({ ...prev, [student]: value }));
                if (field === 'score') {
                    if (!isAdminActivity) {
                        if (value === '' || (/^\d+$/.test(value) && parseInt(value, 10) <= selectedType.maxScore)) {
                            setIndividualScores(prev => ({ ...prev, [student]: value }));
                        }
                    } else {
                        setIndividualScores(prev => ({ ...prev, [student]: value }));
                        // Auto-reproval logic for Admin Activity
                        if (isAdminActivity && value === 'Não') {
                            setVerdicts(prev => ({ ...prev, [student]: 'Reprovado' }));
                        } else if (isAdminActivity && value === 'Sim') {
                            setVerdicts(prev => ({ ...prev, [student]: 'Aprovado' }));
                        }
                    }
                }
                if (field === 'comment') setIndividualComments(prev => ({ ...prev, [student]: value }));
            };

            return (
                <div className="animate-fade-in max-w-5xl mx-auto pb-20">
                    <div className="flex flex-col gap-3 border-b-2 border-slate-200 dark:border-white/5 pb-6 mb-10">
                        <h2 className="text-3xl md:text-4xl font-condensed font-bold text-slate-900 dark:text-white uppercase italic tracking-tight">
                            Formulário de Postagem
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base font-medium">Preenchimento de informações.</p>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="bg-white dark:bg-[#121813] border border-slate-200 dark:border-white/5 rounded-lg p-6 md:p-8 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand mb-6 flex items-center gap-2">
                                <LayoutDashboard size={16} /> Dados da aula
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Aula/Curso</label>
                                    
                                    {/* Dropdown Customizado */}
                                    <div className="relative" ref={classDropdownRef}>
                                        <div
                                            onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
                                            className={`w-full h-12 md:h-14 px-4 bg-white dark:bg-[#0c120e] border ${isClassDropdownOpen ? 'border-brand ring-1 ring-brand/50 shadow-sm' : 'border-slate-200 dark:border-white/10 hover:border-brand/50'} rounded-md text-xs md:text-sm font-bold text-slate-700 dark:text-white flex items-center justify-between cursor-pointer transition-all uppercase`}
                                        >
                                            <div className="flex items-center gap-3 truncate">
                                                <div className="w-6 h-6 rounded bg-brand/10 flex items-center justify-center shrink-0">
                                                    <Book size={12} className="text-brand" />
                                                </div>
                                                <span className="truncate mt-0.5">{selectedType.name}</span>
                                            </div>
                                            <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${isClassDropdownOpen ? 'rotate-180 text-brand' : ''}`} size={16} />
                                        </div>

                                        <div className={`absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#151b17] border border-slate-200 dark:border-white/10 rounded-md shadow-2xl z-50 overflow-hidden transition-all duration-200 origin-top ${isClassDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                            <div className="max-h-60 overflow-y-auto custom-scrollbar flex flex-col p-1.5 gap-1">
                                                {CLASS_TYPES_FEEDBACK.map(t => (
                                                    <div
                                                        key={t.id}
                                                        onClick={() => {
                                                            setSelectedType(t);
                                                            setIndividualScores({});
                                                            if (t.id !== 'admin') setIsAdminActivity(false);
                                                            setIsClassDropdownOpen(false);
                                                        }}
                                                        className={`px-4 py-3 text-xs md:text-sm font-bold uppercase cursor-pointer rounded-sm transition-all flex items-center justify-between group ${selectedType.id === t.id ? 'bg-brand/10 text-brand' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                                    >
                                                        <span className={`truncate pr-2 ${selectedType.id === t.id ? '' : 'group-hover:translate-x-1 transition-transform'}`}>{t.name}</span>
                                                        {selectedType.id === t.id && <Check size={16} className="text-brand shrink-0" />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Admin specific toggle */}
                                    {selectedType.id === 'admin' && (
                                        <div className="mt-2 p-3 bg-brand/5 border border-brand/10 rounded-sm flex items-center gap-4 animate-fade-in">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand">Tipo:</span>
                                            <label className="flex items-center gap-2 cursor-pointer group">
                                                <input type="radio" checked={!isAdminActivity} onChange={() => setIsAdminActivity(false)} className="accent-brand cursor-pointer" />
                                                <span className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 group-hover:text-brand transition-colors">Aula</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer group">
                                                <input type="radio" checked={isAdminActivity} onChange={() => setIsAdminActivity(true)} className="accent-brand cursor-pointer" />
                                                <span className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 group-hover:text-brand transition-colors">Atividade</span>
                                            </label>
                                        </div>
                                    )}
                                </div>

                                {!isAdminActivity && (
                                    <div className="space-y-3 animate-fade-in">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Horário de Início</label>
                                        <input type="datetime-local" value={formatDateTimeForInput(startTime)} onChange={(e) => setStartTime(new Date(e.target.value))} className="w-full h-12 md:h-14 px-4 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/10 rounded-md text-sm font-bold text-slate-700 dark:text-white focus:border-brand outline-none transition-all uppercase cursor-pointer" />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest block">Aluno (Quando tiver mais de um separe com " / ")</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input type="text" value={students} onChange={(e) => setStudents(e.target.value)} className="w-full h-12 md:h-14 pl-12 pr-4 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/10 rounded-md text-sm font-bold text-slate-700 dark:text-white focus:border-brand outline-none transition-all uppercase placeholder-slate-400" placeholder="Ex: Nick1 / Nick2 / Nick3" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pb-32">
                            {studentList.length > 0 && (
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-condensed font-bold uppercase text-slate-800 dark:text-white">
                                        Aluno(s) <span className="text-brand ml-2">({studentList.length})</span>
                                    </h3>
                                    <div className="h-px bg-slate-200 dark:bg-white/10 flex-1 ml-6"></div>
                                </div>
                            )}

                            {studentList.length === 0 ? (
                                <div className="py-16 md:py-20 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-lg flex flex-col items-center justify-center text-center px-4">
                                    <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 text-slate-300">
                                        <Users size={32} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-500 uppercase tracking-wide">Lista de Alunos Vazia</h4>
                                    <p className="text-slate-400 text-sm mt-1">Adicione os nicknames no painel acima antes de enviar.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {studentList.map((student, idx) => {
                                        const isApproved = verdicts[student] === 'Aprovado';
                                        const isReproved = verdicts[student] === 'Reprovado';
                                        return (
                                            <div key={idx} className="bg-white dark:bg-[#151b17] rounded-lg shadow-sm border border-slate-200 dark:border-white/5 overflow-hidden group hover:shadow-md transition-all">
                                                <div className="p-4 md:p-6 flex items-center gap-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
                                                    <div className="w-12 h-12 bg-white dark:bg-black/20 rounded-md border border-slate-200 dark:border-white/10 overflow-hidden shrink-0 shadow-sm relative flex items-center justify-center">
                                                        <img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${student}&direction=3&head_direction=3&gesture=sml&size=m&headonly=1`} className="scale-110 object-center" onError={(e) => e.target.style.display = 'none'} />
                                                        <div className={`absolute bottom-0 inset-x-0 h-1 transition-colors ${isApproved ? 'bg-green-500' : isReproved ? 'bg-red-500' : 'bg-slate-300'}`}></div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Aluno(a)</p>
                                                        <h4 className="text-lg md:text-xl font-condensed font-bold uppercase text-slate-800 dark:text-white truncate">{student}</h4>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <div className="flex bg-slate-100 dark:bg-black/40 rounded-md p-1 gap-1">
                                                            <button onClick={() => updateStudentData(student, 'verdict', 'Aprovado')} className={`p-2 rounded-sm transition-all ${isApproved ? 'bg-white dark:bg-white/10 shadow text-green-600' : 'text-slate-400 hover:text-green-600'}`} title="Aprovar"><Check size={16} /></button>
                                                            <button onClick={() => updateStudentData(student, 'verdict', 'Reprovado')} className={`p-2 rounded-sm transition-all ${isReproved ? 'bg-white dark:bg-white/10 shadow text-red-600' : 'text-slate-400 hover:text-red-600'}`} title="Reprovar"><X size={16} /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4 md:p-6 space-y-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-1/3">
                                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">{isAdminActivity ? 'Envio da Atividade' : 'Pontuação'}</label>
                                                            {isAdminActivity ? (
                                                                <div className="flex flex-col gap-2">
                                                                    <select value={individualScores[student] || 'Sim'} onChange={(e) => updateStudentData(student, 'score', e.target.value)} className="w-full h-10 px-3 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/10 rounded-md text-xs font-bold uppercase outline-none focus:border-brand cursor-pointer">
                                                                        <option value="Sim">Sim</option>
                                                                        <option value="Não">Não</option>
                                                                    </select>
                                                                </div>
                                                            ) : (
                                                                <div className="relative">
                                                                    <input type="number" value={individualScores[student] || ''} onChange={(e) => updateStudentData(student, 'score', e.target.value)} min="0" max={selectedType.maxScore} className="w-full h-10 px-3 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/10 rounded-md text-xs font-bold text-center outline-none focus:border-brand placeholder-slate-400" placeholder="0" />
                                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none">/{selectedType.maxScore}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="w-2/3">
                                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Resultado</label>
                                                            <div className={`h-10 px-4 flex items-center justify-center rounded-md font-bold uppercase text-[10px] tracking-wide border transition-colors ${isApproved ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400' : isReproved ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400' : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500'}`}>
                                                                {isApproved ? 'Aprovado' : 'Reprovado'}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Observações</label>
                                                        <textarea value={individualComments[student] || ''} onChange={(e) => updateStudentData(student, 'comment', e.target.value)} rows={3} className="w-full p-3 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/10 rounded-md text-xs text-slate-700 dark:text-white outline-none focus:border-brand resize-none placeholder-slate-400/50 leading-relaxed" placeholder="Digite observações relevantes..." />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-[#0c120e]/90 backdrop-blur-md border-t border-brand/20 z-40 flex justify-end gap-4 shadow-2xl animate-fade-in">
                            <div className="max-w-7xl w-full mx-auto flex justify-end gap-4">
                                <button onClick={handlePostAndProcess} disabled={isSendingSheet || studentList.length === 0} className="h-12 md:h-14 px-6 md:px-8 bg-brand hover:bg-brand-hover text-white font-condensed font-bold uppercase tracking-widest text-sm rounded-sm shadow-lg hover:shadow-brand/30 hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-wait">
                                    {isSendingSheet ? <Loader2 size={20} className="animate-spin" /> : <SendHorizontal size={20} />}
                                    <span>{isSendingSheet ? 'Enviando...' : 'Postar'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const ClassHistoryList = ({ currentUser }) => {
            const [history, setHistory] = useState([]);
            const [ranking, setRanking] = useState({ headers: [], data: [] });
            const [loading, setLoading] = useState(true);
            const [searchTerm, setSearchTerm] = useState('');
            const [selectedType, setSelectedType] = useState('all');
            const [sortOrder, setSortOrder] = useState('newest');
            const [viewMode, setViewMode] = useState('history'); // 'history' or 'ranking'

            useEffect(() => {
                const loadData = async () => {
                    try {
                        const [historyData, rankingData] = await Promise.all([
                            fetchClassHistory(),
                            fetchRanking()
                        ]);

                        const sortedHistory = historyData.sort((a, b) => {
                            const dateA = parseDateHelper(a.endTime)?.getTime() || 0;
                            const dateB = parseDateHelper(b.endTime)?.getTime() || 0;
                            return dateB - dateA;
                        });
                        setHistory(sortedHistory);
                        setRanking(rankingData);
                    } catch (error) {
                        console.error("Failed to load data", error);
                    } finally {
                        setLoading(false);
                    }
                };
                loadData();
            }, []);

            const classTypes = useMemo(() => Array.from(new Set(history.map(item => item.className))).sort(), [history]);

            const filteredHistory = useMemo(() => {
                return history.filter(item => {
                    const searchLower = searchTerm.toLowerCase();
                    return (item.professor.toLowerCase().includes(searchLower) || item.students.toLowerCase().includes(searchLower) || item.className.toLowerCase().includes(searchLower)) && (selectedType === 'all' || item.className === selectedType);
                }).sort((a, b) => {
                    const dateA = parseDateHelper(a.endTime)?.getTime() || 0;
                    const dateB = parseDateHelper(b.endTime)?.getTime() || 0;
                    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
                });
            }, [history, searchTerm, selectedType, sortOrder]);

            if (loading) return (
                <div className="flex flex-col items-center justify-center py-20">
                    <Loader2 className="animate-spin text-brand mb-4" size={32} />
                    <p className="text-slate-400 font-condensed font-bold uppercase tracking-widest text-sm">Carregando registros...</p>
                </div>
            );

            return (
                <div className="space-y-8 animate-fade-in">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-slate-100 dark:border-white/5 pb-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-condensed font-bold text-slate-900 dark:text-white uppercase italic">
                                {viewMode === 'ranking' ? 'Ranking de Aulas' : 'Relatório de Aulas'}
                            </h2>
                            <p className="text-slate-500 text-sm font-medium">
                                {viewMode === 'ranking' ? 'Visualização do desempenho.' : 'Histórico de aulas.'}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <a
                                href="https://docs.google.com/spreadsheets/d/1EgYrWXVYAqy_7Xpzou7kz2Ll4OZreFA92H1UJle3M9k/edit?gid=1278774364#gid=1278774364"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-sm text-xs font-bold uppercase tracking-wide transition-colors"
                            >
                                <Sheet size={16} /> Conferir Planilha
                            </a>
                            <button
                                onClick={() => setViewMode(prev => prev === 'history' ? 'ranking' : 'history')}
                                className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-sm text-xs font-bold uppercase tracking-wide transition-colors ${viewMode === 'history' ? 'bg-brand text-white border-brand hover:bg-brand-hover' : 'bg-white dark:bg-[#121813] border-slate-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5'}`}
                            >
                                {viewMode === 'history' ? <><CustomHTrophyIcon size={16} /> Ver Ranking</> : <><CustomHistoryIcon size={16} /> Ver Histórico</>}
                            </button>
                        </div>
                    </div>

                    {viewMode === 'history' && (
                        <>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input type="text" placeholder="Buscar registro..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/5 rounded-sm focus:outline-none focus:border-brand transition-all font-medium text-slate-700 dark:text-white placeholder-slate-400 text-sm" />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="relative flex-1">
                                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full pl-11 pr-10 py-3 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/5 rounded-sm focus:outline-none focus:border-brand transition-all font-medium text-slate-700 dark:text-white appearance-none cursor-pointer text-sm">
                                            <option value="all">Todas as Aulas</option>
                                            {classTypes.map((type, idx) => (<option key={idx} value={type}>{type}</option>))}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                    </div>
                                    <div className="relative flex-1">
                                        <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="w-full pl-11 pr-10 py-3 bg-slate-50 dark:bg-[#0a0f0b] border border-slate-200 dark:border-white/5 rounded-sm focus:outline-none focus:border-brand transition-all font-medium text-slate-700 dark:text-white appearance-none cursor-pointer text-sm">
                                            <option value="newest">Mais Recentes</option>
                                            <option value="oldest">Mais Antigas</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#121813] border border-slate-200 dark:border-white/10 shadow-sm rounded-md overflow-hidden min-h-[400px]">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-[#0a0f0b] text-xs uppercase tracking-widest text-brand font-condensed font-bold border-b border-slate-200 dark:border-white/10">
                                                <th className="px-6 py-4 whitespace-nowrap">Data e Hora</th>
                                                <th className="px-6 py-4">Aula/Curso</th>
                                                <th className="px-6 py-4">Professor(a)</th>
                                                <th className="px-6 py-4">Aluno(s)</th>
                                                <th className="px-6 py-4 text-center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-medium">
                                            {filteredHistory.length > 0 ? (
                                                filteredHistory.map((entry, index) => {
                                                    const isApproved = entry.verdict.toLowerCase().includes('aprovado');
                                                    const isReproved = entry.verdict.toLowerCase().includes('reprovado');

                                                    return (
                                                        <tr key={index} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5 last:border-0">
                                                            <td className="px-6 py-4 text-slate-500 whitespace-nowrap font-mono text-xs">
                                                                <div className="flex flex-col gap-1.5">
                                                                    <div className="flex items-center gap-2" title="Término"><CalendarDays size={12} className="text-brand" /> {entry.endTime}</div>
                                                                    {entry.startTime && entry.startTime !== "-" && <div className="flex items-center gap-2 opacity-70" title="Início"><Clock size={12} /> {entry.startTime}</div>}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 text-slate-800 dark:text-slate-200">
                                                                <div className="flex flex-col">
                                                                    <span className="font-bold font-condensed uppercase tracking-wide text-xs">{entry.className}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-condensed uppercase text-xs font-bold">{entry.professor}</td>
                                                            <td className={`px-6 py-4 max-w-[200px] truncate font-bold uppercase tracking-wide text-xs ${isApproved ? 'text-green-600 dark:text-green-400' : isReproved ? 'text-red-600 dark:text-red-400' : 'text-slate-600 dark:text-slate-400'}`} title={entry.students}>
                                                                {entry.students}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="flex justify-center">
                                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 border text-[10px] font-bold uppercase tracking-widest rounded-sm ${isApproved ? 'text-green-700 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' : 'text-red-700 bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'}`}>
                                                                        {isApproved ? <CheckCircle size={10} /> : <XCircle size={10} />}{entry.verdict}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="px-6 py-20 text-center text-slate-400 uppercase font-condensed tracking-widest">Nenhum registro encontrado.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    )}

                    {viewMode === 'ranking' && (
                        <div className="bg-white dark:bg-[#121813] border border-slate-200 dark:border-white/10 shadow-sm rounded-md overflow-hidden min-h-[400px]">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-[#0a0f0b] text-xs uppercase tracking-widest text-brand font-condensed font-bold border-b border-slate-200 dark:border-white/10">
                                            {ranking.headers.length > 0 ? (
                                                ranking.headers.map((header, idx) => (
                                                    <th key={idx} className="px-6 py-4 whitespace-nowrap">{header}</th>
                                                ))
                                            ) : (
                                                <th className="px-6 py-4">Carregando...</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        {ranking.data.length > 0 ? (
                                            ranking.data.map((row, idx) => {
                                                const isCurrentUserRow = currentUser && row.some(cell => typeof cell === 'string' && cell.trim().toLowerCase() === currentUser.nickname.trim().toLowerCase());
                                                return (
                                                    <tr key={idx} className={`group transition-colors border-b border-slate-100 dark:border-white/5 last:border-0 ${isCurrentUserRow ? 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                                                        {row.map((cell, cIdx) => {
                                                            const isNameCell = typeof cell === 'string' && currentUser && cell.trim().toLowerCase() === currentUser.nickname.trim().toLowerCase();
                                                            return (
                                                                <td key={cIdx} className={`px-6 py-4 font-medium ${isCurrentUserRow ? 'text-green-800 dark:text-green-300' : 'text-slate-600 dark:text-slate-300'}`}>
                                                                    <div className="flex items-center gap-2">
                                                                        {cell}
                                                                        {isNameCell && <span className="text-[10px] font-bold uppercase tracking-widest text-green-700 dark:text-green-300 bg-green-500/20 px-2 py-0.5 rounded-sm select-none">(eu)</span>}
                                                                    </div>
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan={7} className="px-6 py-20 text-center text-slate-400 uppercase font-condensed tracking-widest">Nenhum dado de ranking disponível.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            );
        };

        const CorrectionTool = ({ currentUser, onNavigateToReport, addToast }) => {
            const [studentNick, setStudentNick] = useState('');
            const [bbcodeInput, setBbcodeInput] = useState('');
            const [result, setResult] = useState({ approved: false, missing: [], checked: false });
            const [sendingMp, setSendingMp] = useState(false);
            const [postingForum, setPostingForum] = useState(false);
            const [mpButtonLabel, setMpButtonLabel] = useState('');

            // Removido '[/code]' e atualizado método de checagem.
            const REQUIRED_TAGS_CONFIG = [
                { key: 'b', name: 'Negrito', check: t => t.toLowerCase().includes('[/b]') },
                { key: 'i', name: 'Itálico', check: t => t.toLowerCase().includes('[/i]') },
                { key: 'u', name: 'Sublinhado', check: t => t.toLowerCase().includes('[/u]') },
                { key: 'strike', name: 'Riscado', check: t => t.toLowerCase().includes('[/strike]') },
                { key: 'spoiler', name: 'Spoiler', check: t => t.toLowerCase().includes('[/spoiler]') },
                { key: 'table', name: 'Tabela', check: t => t.toLowerCase().includes('[/table]') },
                { key: 'img', name: 'Imagem', check: t => /\[img/i.test(t) }, // Detecta dinamicamente [img], [img=...], [img(25px)] indo além de apenas [/img]
                { key: 'font', name: 'Fonte', check: t => t.toLowerCase().includes('[/font]') },
                { key: 'url', name: 'Link/URL', check: t => t.toLowerCase().includes('[url=') },
                { key: 'size', name: 'Tamanho', check: t => t.toLowerCase().includes('[size=') },
                { key: 'color', name: 'Cor', check: t => t.toLowerCase().includes('[color=') }
            ];

            const handleCheck = () => { 
                if (!bbcodeInput.trim()) return; 
                // Filtra as tags que falharam nos testes do config
                const missingTags = REQUIRED_TAGS_CONFIG.filter(tag => !tag.check(bbcodeInput)).map(t => t.name);
                setResult({ approved: missingTags.length === 0, missing: missingTags, checked: true }); 
            };
            
            const handleClear = () => { setStudentNick(''); setBbcodeInput(''); setResult({ approved: false, missing: [], checked: false }); };

            const handleMpSend = async (isApproval) => {
                if (!studentNick.trim()) {
                    addToast('error', 'Erro', 'Informe o nickname.');
                    return;
                }

                const recipients = studentNick.split('/').map(n => n.trim()).filter(n => n.length > 0);
                if (recipients.length === 0) return;

                setSendingMp(true);
                let successCount = 0;
                let failCount = 0;
                let failedNicks = [];

                const delay = (ms) => new Promise(r => setTimeout(r, ms));

                try {
                    const url = isApproval
                        ? "https://raw.githubusercontent.com/brendonrcc/CFOmps/refs/heads/main/cfoapro"
                        : "https://raw.githubusercontent.com/brendonrcc/CFOmps/refs/heads/main/cforep";

                    const resp = await fetch(url);
                    if (!resp.ok) throw new Error('Falha ao carregar modelo');
                    const template = await resp.text();

                    let motives = "";
                    if (isApproval) {
                        motives = "Cumpriu os requisitos.";
                    } else {
                        const missingNames = result.missing;
                        if (missingNames.length === 0) motives = "Erro desconhecido.";
                        else if (missingNames.length === 1) motives = `Faltou o uso de ${missingNames[0]}.`;
                        else {
                            const last = missingNames[missingNames.length - 1];
                            const rest = missingNames.slice(0, -1);
                            motives = `Faltou o uso de ${rest.join(', ')} e ${last}.`;
                        }
                    }

                    const messageBody = template.replace('{MOTIVOS}', motives);
                    const subject = isApproval ? "[CFO] Aprovação na Atividade" : "[CFO] Reprovação na Atividade";

                    for (let i = 0; i < recipients.length; i++) {
                        const recipient = recipients[i];
                        setMpButtonLabel(`(${i + 1}/${recipients.length}) Enviando...`);

                        try {
                            const success = await sendPrivateMessage(recipient, subject, messageBody);
                            if (success) successCount++;
                            else { failCount++; failedNicks.push(recipient); }
                        } catch (e) {
                            failCount++; failedNicks.push(recipient);
                        }

                        // DELAY DE 10 SEGUNDOS COM CONTAGEM
                        if (i < recipients.length - 1) {
                            for (let s = 10; s > 0; s--) {
                                setMpButtonLabel(`Aguardando... ${s}s`);
                                await delay(1000);
                            }
                        }
                    }

                    if (successCount > 0) {
                        let msg = `Enviado para ${successCount}.`;
                        if (failCount > 0) msg += ` Falha em: ${failedNicks.join(', ')}.`;
                        addToast('success', 'Relatório', msg);
                    } else {
                        addToast('error', 'Erro', 'Falha total no envio.');
                    }

                } catch (error) {
                    addToast('error', 'Erro', `Erro: ${error.message}`);
                } finally {
                    setSendingMp(false);
                    setMpButtonLabel('');
                }
            };

            const handlePaste = async () => {
                try {
                    const text = await navigator.clipboard.readText();
                    setBbcodeInput(text);
                    if (result.checked) setResult({ ...result, checked: false });
                } catch (err) {
                    addToast('error', 'Bloqueado', "Cole manualmente (Ctrl+V).");
                }
            };

            const handlePostReport = (approved) => {
                if (!studentNick.trim()) {
                    addToast('error', 'Erro', 'Preencha o nickname do aluno.');
                    return;
                }

                let reasons = "";
                if (!approved && result.missing.length > 0) {
                    const missingNames = result.missing;
                    if (missingNames.length === 1) reasons = `Faltou utilizar: ${missingNames[0]}.`;
                    else {
                        const last = missingNames[missingNames.length - 1];
                        const rest = missingNames.slice(0, -1);
                        reasons = `Faltou utilizar: ${rest.join(', ')} e ${last}.`;
                    }
                }

                onNavigateToReport({
                    nick: studentNick,
                    approved: approved,
                    comments: reasons
                });
            };

            const handleForumPost = async () => {
                if (!studentNick.trim()) { addToast('error', 'Erro', "Preencha o nickname do aluno."); return; }

                setPostingForum(true);

                const status = result.approved ? 'Aprovado' : 'Reprovado';
                const motivo = result.approved ? 'Cumpriu os requisitos.' : 'Não cumpriu os requisitos.';

                const message = `[font=Poppins][center][color=#528c16][b]RESULTADO DA ATIVIDADE[/b][/color][/center]

[color=#528c16][b]Professor(a):[/b][/color] ${currentUser.nickname}
[color=#528c16][b]Aluno(a):[/b][/color] ${studentNick}
[color=#528c16][b]Veredito:[/b][/color] ${status}
[color=#528c16][b]Motivo(s):[/b][/color] ${motivo}
[color=#528c16][b]Spoiler:[/b][/color]
[spoiler="Atividade"]${bbcodeInput}[/spoiler][/font]`;

                try {
                    await postToForumTopic(38888, message);
                    addToast('success', 'Sucesso', 'Postagem realizada com sucesso!');
                } catch (e) {
                    console.error(e);
                    addToast('error', 'Erro', 'Erro ao postar: ' + e.message);
                } finally {
                    setPostingForum(false);
                }
            };

            return (
                <div className="animate-fade-in max-w-5xl mx-auto min-h-[600px] flex flex-col gap-6">
                    <div className="flex flex-col gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
                        <h2 className="text-3xl font-condensed font-bold text-slate-900 dark:text-white uppercase italic">Ferramenta de Correção</h2>
                        <p className="text-slate-500 text-sm font-medium">Sistema de verificação de sintaxe BBCode para atividades.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <div className="relative bg-[#1e1e1e] border border-slate-700 rounded-md flex flex-col h-[400px] md:h-[600px] overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333333]">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono flex items-center gap-2">
                                            <Terminal size={12} className="text-brand-accent" /> BBCode Editor
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={handlePaste} className="px-2 py-1 hover:bg-[#333333] rounded text-[10px] font-bold uppercase tracking-wide text-slate-400 hover:text-white transition-colors flex items-center gap-1" title="Colar da área de transferência">
                                            <ClipboardList size={12} /> Colar
                                        </button>
                                        <button onClick={handleClear} className="px-2 py-1 hover:bg-[#333333] rounded text-[10px] font-bold uppercase tracking-wide text-slate-400 hover:text-red-400 transition-colors flex items-center gap-1" title="Limpar editor">
                                            <Eraser size={12} /> Limpar
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 flex relative overflow-hidden">
                                    <div className="w-10 bg-[#1e1e1e] border-r border-[#333333] flex flex-col items-end py-4 pr-2 text-[#858585] font-mono text-xs select-none">
                                        {Array.from({ length: 20 }).map((_, i) => <div key={i} className="leading-relaxed">{i + 1}</div>)}
                                    </div>
                                    <textarea
                                        value={bbcodeInput}
                                        onChange={(e) => { setBbcodeInput(e.target.value); if (result.checked) setResult({ ...result, checked: false }); }}
                                        placeholder="// Cole o código BBCode da atividade aqui..."
                                        className="flex-1 w-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-xs p-4 resize-none focus:outline-none leading-relaxed custom-scrollbar selection:bg-[#264f78]"
                                        spellCheck="false"
                                    />
                                </div>

                                <div className="px-4 py-1.5 bg-[#007acc] text-white text-[10px] font-mono flex items-center justify-between shrink-0">
                                    <div className="flex gap-4">
                                        <span>UTF-8</span>
                                        <span>BBCODE</span>
                                    </div>
                                    <span>Ln {bbcodeInput.split('\n').length}, Col {bbcodeInput.length}</span>
                                </div>
                            </div>

                            <div className="p-4 bg-white dark:bg-[#151b17] border border-slate-200 dark:border-white/10 rounded-sm shadow-sm flex flex-col sm:flex-row gap-4 items-center">
                                <div className="relative w-full sm:w-auto sm:flex-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Users size={14} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={studentNick}
                                        onChange={(e) => setStudentNick(e.target.value)}
                                        placeholder="NICKNAME DO ALUNO"
                                        className="w-full pl-9 pr-4 py-2.5 bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-white"
                                    />
                                </div>
                                <button
                                    onClick={handleCheck}
                                    disabled={!bbcodeInput.trim()}
                                    className="w-full sm:w-auto px-8 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-brand/20"
                                >
                                    <Scan size={16} /> <span className="mt-0.5">Executar Análise</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {result.checked ? (
                                <div className={`h-full bg-white dark:bg-[#151b17] border-2 ${result.approved ? 'border-green-500' : 'border-red-500'} rounded-sm shadow-2xl p-0 flex flex-col relative overflow-hidden animate-fade-in`}>
                                    <div className={`${result.approved ? 'bg-green-500' : 'bg-red-500'} p-6 text-center text-white`}>
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm shadow-inner">
                                            {result.approved ? <CheckCircle2 size={32} /> : <XSquare size={32} />}
                                        </div>
                                        <h3 className="text-2xl font-condensed font-bold uppercase italic tracking-wider leading-none">
                                            {result.approved ? 'APROVADO' : 'REPROVADO'}
                                        </h3>
                                        <p className="text-[10px] uppercase tracking-widest opacity-80 font-mono mt-1">STATUS DA VERIFICAÇÃO</p>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-4 text-center border-b border-slate-100 dark:border-white/5 pb-4">
                                                {result.approved
                                                    ? "O código submetido atende integralmente aos padrões de formatação exigidos."
                                                    : "Foram identificadas inconsistências estruturais no código submetido."}
                                            </p>

                                            {!result.approved && result.missing.length > 0 && (
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-red-500">
                                                        <AlertTriangle size={14} />
                                                        <span className="text-[10px] font-bold uppercase tracking-widest">Ausência de:</span>
                                                    </div>
                                                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-500/20 rounded-sm p-3">
                                                        <div className="flex flex-wrap gap-2">
                                                            {result.missing.map((tagName, idx) => (
                                                                <span key={idx} className="px-2 py-1 bg-white dark:bg-black/40 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 rounded-sm text-[10px] font-mono font-bold flex items-center gap-1">
                                                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                                                    {tagName}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {result.approved && (
                                            <div className="mt-6 grid grid-cols-1 gap-3">
                                                <button onClick={() => handlePostReport(true)} className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-sm text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md group">
                                                    <FileSignature size={14} className="group-hover:scale-110 transition-transform" /> Postar Aprovação
                                                </button>
                                                <button onClick={handleForumPost} disabled={postingForum} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md group disabled:opacity-50">
                                                    {postingForum ? <Loader2 size={14} className="animate-spin" /> : <Globe size={14} className="group-hover:scale-110 transition-transform" />} Postar no Fórum
                                                </button>
                                                <button onClick={() => handleMpSend(true)} disabled={sendingMp} className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-sm text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md group disabled:opacity-50">
                                                    {sendingMp ? (
                                                        <>
                                                            <Loader2 size={14} className="animate-spin" />
                                                            <span className="truncate">{mpButtonLabel || 'Enviando...'}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <SendHorizontal size={14} className="group-hover:scale-110 transition-transform" /> Enviar MP Aprovação
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        )}

                                        {!result.approved && (
                                            <div className="mt-6 grid grid-cols-1 gap-3">
                                                <button onClick={() => handlePostReport(false)} className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md group">
                                                    <FileSignature size={14} className="group-hover:scale-110 transition-transform" /> Postar Reprovação
                                                </button>
                                                <button onClick={handleForumPost} disabled={postingForum} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md group disabled:opacity-50">
                                                    {postingForum ? <Loader2 size={14} className="animate-spin" /> : <Globe size={14} className="group-hover:scale-110 transition-transform" />} Postar no Fórum
                                                </button>
                                                <button onClick={() => handleMpSend(false)} disabled={sendingMp} className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md group disabled:opacity-50">
                                                    {sendingMp ? (
                                                        <>
                                                            <Loader2 size={14} className="animate-spin" />
                                                            <span className="truncate">{mpButtonLabel || 'Enviando...'}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <SendHorizontal size={14} className="group-hover:scale-110 transition-transform" /> Enviar MP Reprovação
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-white/5 rounded-sm p-8 flex flex-col items-center justify-center text-center opacity-60 border-dashed">
                                    <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-400 animate-pulse">
                                        <Code size={40} />
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Aguardando Input</h4>
                                    <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">Cole o código BBCode ao lado para iniciar a verificação automática.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        const MENU_ITEMS = [
            { id: 'classes', label: 'Aulas e Scripts', icon: CustomCourseIcon },
            { id: 'reports', label: 'Formulário de Postagem', icon: CustomReportIcon },
            { id: 'history', label: 'Relatório de Aulas', icon: CustomHistoryIcon },
            { id: 'correction', label: 'Ferramenta de Correção', icon: CustomCorrectionIcon },
            { id: 'manual_prof', label: 'Manual do Professor', icon: CustomProfessorIcon },
        ];

        const MobileMenu = ({ menuItems, currentUser, currentView, navigateTo, onClose }) => {
            return (
                <div className="fixed inset-0 z-[1000] lg:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
                    <div className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-dark-surface flex flex-col animate-fade-in shadow-2xl border-r-4 border-brand">
                        <div className="h-16 flex items-center justify-between px-5 shrink-0 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-dark-element">
                            <div className="flex items-center gap-3">
                                <img src={LOGO_URL} alt="Logo" className="h-8 w-auto object-contain" />
                                <div className="flex flex-col leading-none">
                                    <span className="font-condensed font-bold uppercase text-brand text-lg tracking-tighter">Menu</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Navegação</span>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-1.5 bg-white dark:bg-dark-surface border border-slate-200 dark:border-white/10 rounded-sm">
                                <X size={20} className="text-slate-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                            <button
                                onClick={() => { navigateTo('home'); onClose(); }}
                                className={`flex items-center w-full px-5 py-4 rounded-sm transition-all font-condensed font-bold uppercase tracking-wide text-sm ${currentView === 'home' ? 'bg-brand text-white shadow-md' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-hover border border-transparent'}`}
                            >
                                <CustomHomeIcon size={18} className={currentView === 'home' ? '' : 'opacity-70 grayscale'} />
                                <span className="ml-4">Início</span>
                            </button>

                            <div className="h-px bg-slate-100 dark:bg-white/5 my-4 mx-2"></div>

                            {menuItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => { navigateTo(item.id); onClose(); }}
                                    className={`flex items-center w-full px-4 py-3 rounded-sm text-sm font-condensed font-bold uppercase tracking-wide transition-all ${currentView === item.id ? 'bg-white dark:bg-dark-surface text-brand shadow-sm border-l-4 border-brand' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-dark-surface'}`}
                                >
                                    <span className="ml-3">{item.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-dark-element">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden flex items-center justify-center">
                                    <img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${currentUser?.nickname}&direction=3&head_direction=3&gesture=sml&size=m&headonly=1`} alt="Avatar" className="scale-110" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-condensed font-bold uppercase text-sm text-slate-900 dark:text-white leading-none">{currentUser?.nickname}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand mt-1">{currentUser?.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // --- AUTH SCREEN COMPONENT ---
        const AuthScreen = ({ status }) => {
            return (
                <div className="flex flex-col min-h-screen w-full bg-[#050806] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(46,92,24,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(46,92,24,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,92,24,0.1),transparent_70%)] pointer-events-none"></div>

                    <div className="relative z-10 w-full max-w-lg p-6 md:p-8">
                        <div className="relative border border-brand/30 bg-[#0a0f0b]/90 backdrop-blur-md p-8 md:p-10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(46,92,24,0.1)] overflow-hidden rounded-sm">

                            {/* Scanning Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand/50 shadow-[0_0_15px_#2e5c18] animate-scan pointer-events-none z-0"></div>

                            {/* Status Icon */}
                            <div className="mb-8 relative z-10">
                                {status === 'identifying' && (
                                    <div className="w-24 h-24 rounded-full border-2 border-brand/30 flex items-center justify-center relative">
                                        <div className="absolute inset-0 rounded-full border border-brand/20 animate-ping opacity-50"></div>
                                        <Scan size={40} className="text-brand animate-pulse" />
                                    </div>
                                )}
                                {status === 'verifying' && (
                                    <div className="w-24 h-24 rounded-full border-2 border-yellow-500/30 flex items-center justify-center relative">
                                        <div className="absolute inset-0 rounded-full border-t-2 border-yellow-500 animate-spin"></div>
                                        <Fingerprint size={40} className="text-yellow-500" />
                                    </div>
                                )}
                                {status === 'success' && (
                                    <div className="w-24 h-24 rounded-full border-2 border-green-500/30 flex items-center justify-center relative bg-green-500/10">
                                        <ShieldCheck size={48} className="text-green-500" />
                                    </div>
                                )}
                                {(status === 'denied_nologin' || status === 'denied_permission') && (
                                    <div className="w-24 h-24 rounded-full border-2 border-red-500/30 flex items-center justify-center relative bg-red-500/10">
                                        <ShieldAlert size={48} className="text-red-500" />
                                    </div>
                                )}
                            </div>

                            {/* Status Text */}
                            <h2 className="text-2xl font-condensed font-bold uppercase tracking-widest text-white mb-2 z-10 text-center leading-none">
                                {status === 'identifying' && "Escaneando Credenciais..."}
                                {status === 'verifying' && "Verificando Autorização..."}
                                {status === 'success' && "Acesso Autorizado"}
                                {(status === 'denied_nologin' || status === 'denied_permission') && "Acesso Negado"}
                            </h2>

                            <p className="text-[10px] font-mono text-brand uppercase tracking-[0.2em] mb-6 z-10 text-center opacity-80">
                                {status === 'identifying' && "ESTABELECENDO CONEXÃO SEGURA COM O FÓRUM"}
                                {status === 'verifying' && "CONSULTANDO BANCO DE DADOS DO CFO"}
                                {status === 'success' && "REDIRECIONANDO PARA O SISTEMA..."}
                                {status === 'denied_nologin' && "FALHA NA IDENTIFICAÇÃO"}
                                {status === 'denied_permission' && "SEM CREDENCIAIS DE ACESSO SUFICIENTES"}
                            </p>

                            {/* Error Details / Actions */}
                            {(status === 'denied_nologin' || status === 'denied_permission') && (
                                <div className="w-full bg-red-950/30 border border-red-500/30 p-4 relative z-10 animate-fade-in">
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertTriangle size={16} className="text-red-500" />
                                        <span className="text-xs font-bold text-red-400 uppercase tracking-wide">Motivo do Bloqueio</span>
                                    </div>
                                    <p className="text-xs text-red-200/80 font-mono leading-relaxed mb-4">
                                        {status === 'denied_nologin'
                                            ? "Não foi possível identificar o usuário logado. Certifique-se de estar conectado ao fórum antes de acessar."
                                            : "O usuário identificado não possui as permissões necessárias para acessar este painel restrito."}
                                    </p>
                                    <a href="/login" className="block w-full py-3 bg-red-600 hover:bg-red-700 text-white text-center text-xs font-bold uppercase tracking-widest transition-colors rounded-sm">
                                        Ir para o Fórum
                                    </a>
                                </div>
                            )}

                            {/* Decorative HUD Elements */}
                            <div className="absolute top-4 right-4 flex gap-1">
                                <div className="w-1 h-1 bg-brand rounded-full animate-blink"></div>
                                <div className="w-1 h-1 bg-brand rounded-full animate-blink" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-1 h-1 bg-brand rounded-full animate-blink" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <div className="absolute bottom-4 left-4 text-[8px] font-mono text-white/20">
                                CFOSYSTEM V1
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const App = () => {
            const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('cfo_user'));
            const [currentUser, setCurrentUser] = useState(() => {
                const stored = localStorage.getItem('cfo_user');
                return stored ? JSON.parse(stored) : null;
            });
            const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
            const [authStatus, setAuthStatus] = useState(() => localStorage.getItem('cfo_user') ? 'success' : 'identifying');

            // Security Ref: Stores the user object in a closure that is harder to modify via DevTools than React State
            const secureUserRef = useRef(currentUser);

            // ... (Other states)
            const [currentView, setCurrentView] = useState('home');
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
            const [selectedClass, setSelectedClass] = useState(null);
            const [classContent, setClassContent] = useState([]);
            const [contentLoading, setContentLoading] = useState(false);
            const [classStartTime, setClassStartTime] = useState(null);
            const [showWarning, setShowWarning] = useState(false);
            const [reportData, setReportData] = useState(null);
            const [manualContent, setManualContent] = useState([]);
            const [rerollTrigger, setRerollTrigger] = useState(0);
            const [textZoom, setTextZoom] = useState(0);
            const [toasts, setToasts] = useState([]);
            const warningCooldownRef = useRef(false);

            const addToast = (type, title, message) => {
                const id = Math.random().toString(36).substr(2, 9);
                setToasts(prev => [...prev, { id, type, title, message }]);
                setTimeout(() => removeToast(id), 5000);
            };

            const removeToast = (id) => {
                setToasts(prev => prev.filter(t => t.id !== id));
            };

            useEffect(() => {
                const root = document.documentElement;
                if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
                localStorage.setItem('theme', theme);
            }, [theme]);

            // AUTOMATIC AUTHENTICATION EFFECT
            useEffect(() => {
                const authenticate = async () => {
                    const hasCachedUser = !!localStorage.getItem('cfo_user');

                    if (!hasCachedUser) {
                        setAuthStatus('identifying');
                        // Add a small artificial delay for the "scan" effect to be visible
                        await new Promise(resolve => setTimeout(resolve, 1500));
                    }

                    const forumNick = await getForumUsername();

                    if (!forumNick) {
                        localStorage.removeItem('cfo_user');
                        setIsLoggedIn(false);
                        setCurrentUser(null);
                        setAuthStatus('denied_nologin');
                        return;
                    }

                    if (!hasCachedUser) setAuthStatus('verifying');
                    try {
                        const user = await loginUser(forumNick);

                        if (user) {
                            localStorage.setItem('cfo_user', JSON.stringify(user));
                            secureUserRef.current = user;
                            setCurrentUser(user);

                            if (!hasCachedUser) {
                                setAuthStatus('success');
                                setTimeout(() => {
                                    setIsLoggedIn(true);
                                }, 1000); // Transition delay
                            } else {
                                setIsLoggedIn(true);
                            }
                        } else {
                            localStorage.removeItem('cfo_user');
                            setIsLoggedIn(false);
                            setCurrentUser(null);
                            setAuthStatus('denied_permission');
                        }
                    } catch (e) {
                        console.error(e);
                        localStorage.removeItem('cfo_user');
                        setIsLoggedIn(false);
                        setCurrentUser(null);
                        setAuthStatus('denied_permission');
                    }
                };

                authenticate();
            }, []);

            // SECURITY CHECK - Periodic Integrity Validation
            useEffect(() => {
                if (!isLoggedIn) return;

                const checkIntegrity = async () => {
                    // 1. Verify if React State has been tampered with compared to internal Ref
                    if (currentUser !== secureUserRef.current) {
                        console.warn("Security Alert: State modification detected.");
                        localStorage.removeItem('cfo_user');
                        setIsLoggedIn(false);
                        setCurrentUser(null);
                        window.location.reload();
                        return;
                    }

                    // 2. Verify against Forum Session
                    const actualNick = await getForumUsername();
                    if (!actualNick || (secureUserRef.current && actualNick !== secureUserRef.current.nickname)) {
                        localStorage.removeItem('cfo_user');
                        setIsLoggedIn(false);
                        setCurrentUser(null);
                        setAuthStatus('denied_permission');
                        alert("Sessão inválida ou modificada externamente. Recarregando...");
                        window.location.reload();
                    }
                };

                const interval = setInterval(checkIntegrity, 10000); // Check every 10 seconds
                return () => clearInterval(interval);
            }, [isLoggedIn, currentUser]);

            // HASH NAVIGATION HANDLER
            useEffect(() => {
                const handleHashChange = () => {
                    const hash = window.location.hash.replace('#', '');
                    if (hash === 'report') setCurrentView('reports');
                    if (hash === 'classes') setCurrentView('classes');
                    if (hash === 'history') setCurrentView('history');
                    if (hash === 'correction') setCurrentView('correction');
                    if (hash === 'manual') setCurrentView('manual_prof');
                };

                window.addEventListener('hashchange', handleHashChange);
                // Check initial hash
                handleHashChange();

                return () => window.removeEventListener('hashchange', handleHashChange);
            }, []);

            // Scroll to ID on view change
            useEffect(() => {
                if (currentView) {
                    const viewToId = {
                        'reports': 'report',
                        'classes': 'classes',
                        'history': 'history',
                        'correction': 'correction',
                        'manual_prof': 'manual'
                    };
                    const id = viewToId[currentView];
                    if (id && window.location.hash === `#${id}`) {
                        setTimeout(() => {
                            const el = document.getElementById(id);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                }
            }, [currentView]);

            useEffect(() => {
                let gid = null;
                if (currentView === 'manual_prof') gid = MANUAL_PROF_GID;

                if (gid) {
                    const load = async () => {
                        setContentLoading(true);
                        setManualContent([]);
                        try {
                            const rows = await fetchClassContent(gid);
                            setManualContent(parseRowsToBlocks(rows));
                        } catch (e) { console.error(e); }
                        finally { setContentLoading(false); }
                    };
                    load();
                }
            }, [currentView]);

            const openClass = async (cls) => {
                setSelectedClass(cls);
                setCurrentView('classes');
                setClassStartTime(new Date());
                setContentLoading(true);
                try {
                    const [classRows, initRows] = await Promise.all([
                        fetchClassContent(cls.gid),
                        fetchCSV(INIT_PROC_GID)
                    ]);

                    const mainBlocks = parseRowsToBlocks(classRows);

                    const initBlocks = initRows
                        .filter(r => r[0])
                        .map(r => ({
                            id: generateId(),
                            type: 'leaf',
                            tag: 'att1',
                            content: r[0],
                            extra: ''
                        }));

                    if (initBlocks.length > 0) {
                        initBlocks.unshift({ id: generateId(), type: 'leaf', tag: 'mst', content: 'Procedimentos Iniciais', extra: '' });
                    }

                    setClassContent([...initBlocks, ...mainBlocks]);
                } catch (err) {
                    console.error(err);
                    alert('Erro ao carregar.');
                } finally {
                    setContentLoading(false);
                }
            };

            const handlePostReport = () => { if (selectedClass && classStartTime) { setReportData({ classId: selectedClass.id, startTime: classStartTime }); setCurrentView('reports'); setSelectedClass(null); } };

            const handleNavigateFromCorrection = (data) => {
                setReportData({
                    classId: 'admin_activity',
                    startTime: new Date(),
                    studentNick: data.nick,
                    verdict: data.approved ? 'Aprovado' : 'Reprovado',
                    score: 'Sim',
                    comments: data.comments
                });
                setCurrentView('reports');
            };

            const triggerWarning = useCallback(() => {
                if (warningCooldownRef.current) return;
                setShowWarning(true);
                // Cooldown after trigger automatic
                setTimeout(() => {
                    setShowWarning(false);
                }, 5000);
            }, []);

            const dismissWarning = () => {
                setShowWarning(false);
                // Apply cooldown on dismiss to prevent "constant appearing" as requested
                warningCooldownRef.current = true;
                setTimeout(() => {
                    warningCooldownRef.current = false;
                }, 5000);
            };

            const Toast = ({ message, onClose }) => (
                <div className="fixed top-24 right-4 z-[9999] bg-red-800 text-white px-6 py-4 rounded shadow-2xl animate-slide-in-right flex items-center gap-4 max-w-sm border-l-4 border-yellow-500">
                    <div className="bg-white/10 p-2 rounded-full shrink-0"><AlertTriangle size={20} className="text-yellow-500" /></div>
                    <div className="flex flex-col"><span className="text-xs font-bold uppercase text-yellow-500 tracking-wider">Atenção</span><p className="font-bold text-sm leading-snug">{message}</p></div>
                    <button onClick={onClose} className="p-1 hover:bg-white/10 rounded transition-colors ml-auto"><X size={16} /></button>
                </div>
            );

            const Footer = () => (
                <footer className="mt-auto bg-[#050806] border-t-2 border-brand/20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #2e5c18 25%, transparent 25%, transparent 50%, #2e5c18 50%, #2e5c18 75%, transparent 75%, transparent)', backgroundSize: '60px 60px' }}></div>

                    <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-12 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-start gap-5 group">
                                <div className="relative p-2 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand/50 transition-colors">
                                    <img src={LOGO_URL} alt="CFO" className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/20"></div>
                                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/20"></div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="font-condensed font-bold text-white uppercase tracking-widest text-sm leading-none">Centro de Formação de Oficiais</span>
                                    <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">Polícia Militar Revolução Contra o Crime • PMRCC</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="text-[10px] text-white/30 font-mono">© {new Date().getFullYear()} DIREITOS RESERVADOS À SUBCOMPANHIA</span>
                                <span className="text-brand font-bold uppercase tracking-widest text-[10px] hidden md:inline">DESENVOLVIDO POR .BRENDON</span>
                            </div>
                        </div>
                    </div>
                </footer>
            );

            const quickAccessConfig = useMemo(() => {
                return {
                    card1: {
                        id: 'classes',
                        title: 'Scripts',
                        desc: 'Clique aqui para acessar os scripts.',
                        iconImg: 'https://i.imgur.com/N03iLnL.png',
                        iconLucide: null,
                        color: 'bg-brand',
                        bgHover: 'group-hover:text-brand',
                        borderHover: 'hover:border-brand/60'
                    },
                    card2: {
                        id: 'manual_prof',
                        title: 'Manual do Professor',
                        desc: 'Normas e prazos de aplicação.',
                        iconImg: 'https://i.imgur.com/85pC8ek.png',
                        iconLucide: null,
                        color: 'bg-slate-400',
                        bgHover: 'group-hover:text-slate-700',
                        borderHover: 'hover:border-slate-300'
                    }
                };
            }, []);

            if (!isLoggedIn) {
                return <AuthScreen status={authStatus} />;
            }

            return (
                <div className="flex flex-col min-h-screen w-full font-sans text-slate-800 dark:text-slate-200">
                    {showWarning && <Toast message="Pulo de linhas detectado!" onClose={dismissWarning} />}

                    <ToastContainer toasts={toasts} removeToast={removeToast} />

                    <Navbar user={currentUser} onMenuClick={() => setMobileMenuOpen(true)} navigateTo={setCurrentView} currentView={currentView} menuItems={MENU_ITEMS} toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} theme={theme} />

                    {mobileMenuOpen && (
                        <MobileMenu
                            menuItems={MENU_ITEMS}
                            currentUser={currentUser}
                            currentView={currentView}
                            navigateTo={setCurrentView}
                            onClose={() => setMobileMenuOpen(false)}
                        />
                    )}

                    <div className="flex-1 w-full max-w-[1400px] mx-auto p-0 md:p-2 lg:p-8 relative z-10">
                        <main className="paper-container min-h-[800px] p-4 lg:p-12 transition-colors duration-500 rounded-b-sm">

                            {currentView === 'home' && (
                                <div className="animate-fade-in space-y-12">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-200 dark:border-white/5 pb-8">
                                        <div>
                                            <h2 className="text-3xl md:text-5xl font-condensed font-bold text-slate-900 dark:text-white uppercase italic tracking-tight">Bem-vindo, {currentUser.nickname}</h2>
                                        </div>
                                    </div>

                                    <Slideshow />

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                        {/* Card 1 - Dynamic */}
                                        <div onClick={() => setCurrentView(quickAccessConfig.card1.id)} className="relative bg-white dark:bg-[#121813] p-8 border border-slate-200 dark:border-white/5 shadow-folder cursor-pointer group overflow-hidden transition-all duration-300 hover:-translate-y-1 rounded-sm">
                                            <div className={`absolute top-0 left-0 w-1 h-full ${quickAccessConfig.card1.color} group-hover:w-2 transition-all`}></div>
                                            <div className="mb-8 flex justify-between items-start">
                                                <div className="p-3 bg-slate-100 dark:bg-[#0a0f0b] rounded-sm group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-colors">
                                                    {quickAccessConfig.card1.iconImg ?
                                                        <img src={quickAccessConfig.card1.iconImg} className="w-8 h-8 object-contain mb-0" alt={quickAccessConfig.card1.title} />
                                                        :
                                                        React.createElement(quickAccessConfig.card1.iconLucide, { size: 32, className: "text-brand" })
                                                    }
                                                </div>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest text-slate-300 ${quickAccessConfig.card1.bgHover} transition-colors`}>Acesso Rápido</span>
                                            </div>
                                            <h3 className={`text-2xl font-condensed font-bold uppercase tracking-wide mb-2 ${quickAccessConfig.card1.bgHover} transition-colors`}>{quickAccessConfig.card1.title}</h3>
                                            <p className="text-sm font-medium opacity-60 leading-relaxed">{quickAccessConfig.card1.desc}</p>
                                        </div>

                                        {/* Card 2 - Dynamic */}
                                        <div onClick={() => setCurrentView(quickAccessConfig.card2.id)} className="relative bg-white dark:bg-[#121813] p-8 border border-slate-200 dark:border-white/5 shadow-folder cursor-pointer group overflow-hidden transition-all duration-300 hover:-translate-y-1 rounded-sm">
                                            <div className={`absolute top-0 left-0 w-1 h-full ${quickAccessConfig.card2.color} group-hover:w-2 transition-all`}></div>
                                            <div className="mb-8 flex justify-between items-start">
                                                <div className="p-3 bg-slate-100 dark:bg-[#0a0f0b] rounded-sm group-hover:bg-slate-800 transition-colors">
                                                    {quickAccessConfig.card2.iconImg ?
                                                        <img src={quickAccessConfig.card2.iconImg} className="w-8 h-8 object-contain mb-0" alt={quickAccessConfig.card2.title} />
                                                        :
                                                        React.createElement(quickAccessConfig.card2.iconLucide, { size: 32, className: "text-slate-500" })
                                                    }
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-500 transition-colors">Documentação</span>
                                            </div>
                                            <h3 className="text-2xl font-condensed font-bold uppercase tracking-wide mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{quickAccessConfig.card2.title}</h3>
                                            <p className="text-sm font-medium opacity-60 leading-relaxed">{quickAccessConfig.card2.desc}</p>
                                        </div>

                                        <NoticeBoard />
                                    </div>
                                </div>
                            )}

                            {currentView === 'classes' && !selectedClass && (
                                <div id="classes" className="animate-fade-in space-y-10">
                                    <div className="border-b-2 border-slate-200 dark:border-white/5 pb-6 flex items-end justify-between">
                                        <div>
                                            <h2 className="text-3xl md:text-4xl font-condensed font-bold text-slate-900 dark:text-white uppercase tracking-tight italic">AULAS E SCRIPTS</h2>
                                            <p className="text-slate-500 font-medium mt-2 text-sm">Selecione o curso que deseja abaixo.</p>
                                        </div>
                                        <div className="hidden md:block">
                                            <span className="text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full">Módulo I</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6">
                                        {CLASSES.map((cls, idx) => (
                                            <div key={cls.id} onClick={() => openClass(cls)} className="group cursor-pointer">
                                                <div className="relative bg-white dark:bg-[#121813] border border-slate-200 dark:border-white/10 hover:border-brand/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg">

                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 dark:bg-white/10 group-hover:bg-brand transition-colors"></div>

                                                    <div className="p-6 md:w-32 bg-slate-50 dark:bg-[#0a0f0b] border-r border-slate-100 dark:border-white/5 flex flex-col justify-center items-center md:items-start shrink-0">
                                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">Curso</span>
                                                        <span className="text-3xl font-display text-slate-300 dark:text-white/20 group-hover:text-brand transition-colors">0{idx + 1}</span>
                                                    </div>

                                                    <div className="p-6 flex-1 flex flex-col justify-center relative z-10">
                                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                                            <h4 className="text-xl font-condensed font-bold uppercase tracking-wide text-slate-800 dark:text-white group-hover:text-brand transition-colors flex items-center gap-3">
                                                                <img src={cls.icon} alt="" className="w-8 h-8 object-contain drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity" />
                                                                {cls.name}
                                                            </h4>
                                                        </div>
                                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 font-sans pl-3 border-l-2 border-slate-200 dark:border-white/10 group-hover:border-brand/30 transition-colors">
                                                            {cls.description}
                                                        </p>
                                                    </div>

                                                    <div className="p-6 md:w-48 bg-slate-50 dark:bg-[#0a0f0b]/50 flex items-center justify-end md:justify-center border-l border-slate-100 dark:border-white/5 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                                                        <span className="font-condensed font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                                            Acessar <ArrowRight size={16} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {currentView === 'classes' && selectedClass && (
                                <div className="animate-fade-in">
                                    <div className="sticky top-14 lg:top-20 z-30 -mx-4 md:-mx-12 px-4 md:px-12 bg-slate-100/90 dark:bg-[#0c120e]/95 backdrop-blur-md border-y border-brand/30 mb-8 py-2 md:py-4 shadow-md transition-all">
                                        <div className="max-w-[1400px] mx-auto flex flex-row items-center justify-between gap-2 md:gap-4">
                                            <div className="flex items-center gap-2 md:gap-5 min-w-0">
                                                <button onClick={() => setSelectedClass(null)} className="shrink-0 group flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200 shadow-sm">
                                                    <ArrowLeft size={20} className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
                                                </button>
                                                <img src={selectedClass.icon} alt="" className="hidden sm:block w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-md shrink-0" />
                                                <div className="flex flex-col min-w-0">
                                                    <h2 className="text-base md:text-3xl font-condensed font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none drop-shadow-sm truncate">
                                                        {selectedClass.name}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 md:gap-4 shrink-0">
                                                <div className="hidden md:flex items-center bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-sm mr-2 shadow-sm">
                                                    <button
                                                        onClick={() => setTextZoom(Math.max(0, textZoom - 1))}
                                                        disabled={textZoom <= 0}
                                                        className="w-10 h-12 flex items-center justify-center text-slate-500 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors border-r border-slate-200 dark:border-white/5"
                                                        title="Diminuir Fonte"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <div className="px-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 select-none w-20">
                                                        <Type size={14} />
                                                        <span>{textZoom === 0 ? '100%' : textZoom === 1 ? '125%' : '150%'}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => setTextZoom(Math.min(2, textZoom + 1))}
                                                        disabled={textZoom >= 2}
                                                        className="w-10 h-12 flex items-center justify-center text-slate-500 hover:text-brand hover:bg-slate-50 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors border-l border-slate-200 dark:border-white/5"
                                                        title="Aumentar Fonte"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                                <div className="hidden xl:flex flex-col items-end border-r border-slate-300 dark:border-white/10 pr-6 mr-2">
                                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Professor(a)</span>
                                                    <span className="font-condensed font-bold text-sm text-slate-700 dark:text-slate-300 uppercase">{currentUser?.nickname}</span>
                                                </div>
                                                <button onClick={handlePostReport} className="h-8 md:h-12 px-3 md:px-8 bg-brand hover:bg-brand-hover text-white font-condensed font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5 flex items-center justify-center gap-1.5 md:gap-3 border border-white/10 rounded-sm group relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]"></div>
                                                    <FileSignature size={18} className="w-3 h-3 md:w-[18px] md:h-[18px]" />
                                                    <span className="hidden sm:inline leading-none">Postar</span>
                                                    <span className="sm:hidden leading-none">Postar</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full mx-auto">
                                        {contentLoading ? (
                                            <div className="flex flex-col items-center justify-center py-32 bg-white dark:bg-[#0a0f0b] border border-slate-200 dark:border-slate-700 shadow-sm rounded-sm">
                                                <Loader2 className="animate-spin text-brand mb-4" size={48} />
                                                <span className="font-condensed font-bold uppercase tracking-widest text-slate-400 text-sm">Descriptografando Script...</span>
                                            </div>
                                        ) : (
                                            <div className="relative min-h-[800px]">
                                                <div className="watermark"><img src={LOGO_URL} className="w-full h-auto grayscale opacity-10" /></div>

                                                <div className="relative z-10 space-y-2">
                                                    <ContentRenderer blocks={classContent} onSkipWarning={triggerWarning} currentUser={currentUser} textZoom={textZoom} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {currentView === 'reports' && (
                                <div id="report">
                                    <ClassFeedbackForm
                                        professor={currentUser}
                                        initialClassId={reportData?.classId}
                                        initialStartTime={reportData?.startTime}
                                        initialStudent={reportData?.studentNick}
                                        initialVerdict={reportData?.verdict}
                                        initialScore={reportData?.score}
                                        initialComments={reportData?.comments}
                                        isEvaluation={false}
                                        initialQuestions={null}
                                        addToast={addToast}
                                    />
                                </div>
                            )}

                            {currentView === 'history' && <div id="history"><ClassHistoryList currentUser={currentUser} /></div>}

                            {(currentView === 'correction') && (
                                <div id="correction">
                                    <CorrectionTool
                                        currentUser={currentUser}
                                        onNavigateToReport={handleNavigateFromCorrection}
                                        addToast={addToast}
                                    />
                                </div>
                            )}

                            {currentView === 'manual_prof' && (
                                <div id="manual" className="animate-fade-in max-w-6xl mx-auto pb-16 pt-0 md:pt-6">
                                    {/* Premium Header Container */}
                                    <div className="relative bg-[#050806] rounded-t-3xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(46,92,24,0.15)] border border-white/5 border-b-0 mb-0">
                                        {/* Cybernetic/Grid Background elements */}
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(46,92,24,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(46,92,24,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-[#050806]/90 to-[#050806] z-0"></div>
                                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 z-0 pointer-events-none"></div>

                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-60 z-20"></div>

                                        {/* Abstract decorative icon background */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] transform -rotate-12 scale-[4] z-0 origin-right pointer-events-none mix-blend-screen">
                                            <Book size={200} />
                                        </div>

                                        <div className="relative z-10 px-5 py-10 md:p-20 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                                            {/* Glassmorphic Icon Box */}
                                            <div className="relative group shrink-0">
                                                <div className="absolute inset-0 bg-brand blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
                                                <div className="relative w-24 h-24 md:w-40 md:h-40 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group-hover:border-brand/40 transition-colors duration-500">
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent opacity-50"></div>
                                                    <div className="relative z-10 p-2 mix-blend-screen opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out">
                                                        <CustomProfessorIcon size={64} className="drop-shadow-2xl w-16 h-16 md:w-20 md:h-20" />
                                                    </div>
                                                    {/* Scanning line effect inside icon box */}
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-brand/60 shadow-[0_0_15px_#2e5c18] animate-scan pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                </div>
                                            </div>

                                            <div className="text-center md:text-left flex-1 flex flex-col justify-center pt-0 md:pt-4">
                                                <div className="flex items-center justify-center md:justify-start gap-4 mb-5">
                                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-light/10 border border-brand/30 text-brand-light rounded-sm text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(46,92,24,0.15)] select-none">
                                                        <ShieldCheck size={14} className="text-brand" /> CFO
                                                    </div>
                                                    <div className="h-4 w-px bg-white/20"></div>
                                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono select-none">Documento Oficial</span>
                                                </div>

                                                <h2 className="text-3xl md:text-6xl font-display text-white tracking-wide drop-shadow-lg mb-4 leading-none uppercase relative inline-block">
                                                    Manual do Professor
                                                </h2>

                                                <p className="text-slate-300 font-poppins text-sm md:text-md max-w-3xl leading-relaxed mx-auto md:mx-0">
                                                    Manual destinado aos <strong className="text-white font-medium bg-brand/10 px-1">professores</strong> do Centro de Formação de Oficiais reunindo as normas e diretrizes necessárias para a correta aplicação das disciplinas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    {contentLoading ? (
                                        <div className="flex flex-col items-center justify-center py-40 bg-white dark:bg-[#080c09] border border-slate-200 dark:border-white/10 shadow-2xl rounded-b-3xl relative z-10 transition-colors">
                                            <div className="relative">
                                                <div className="absolute inset-0 border-2 border-brand/20 rounded-full animate-ping opacity-50"></div>
                                                <Loader2 className="animate-spin text-brand relative z-10" size={56} />
                                            </div>
                                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-8 animate-pulse bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-sm border border-slate-200 dark:border-white/10">Sincronizando Base de Dados...</span>
                                        </div>
                                    ) : (
                                        <div className="bg-white dark:bg-[#0a0e0b] px-4 py-8 md:p-20 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] rounded-b-3xl border border-slate-200 dark:border-white/5 border-t-0 relative overflow-hidden backdrop-blur-xl z-10 min-h-[600px] transition-colors">

                                            {/* Subtle line decorations for premium feel */}
                                            <div className="absolute top-0 left-12 w-1 h-32 bg-gradient-to-b from-brand/50 to-transparent rounded-b-full"></div>
                                            <div className="absolute top-0 right-12 w-px h-64 bg-gradient-to-b from-white/10 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"></div>

                                            {/* Elegant deeper watermark */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none mix-blend-overlay z-0">
                                                <img src={LOGO_URL} className="w-[800px] h-auto grayscale opacity-[0.015]" />
                                            </div>

                                            <div className="relative z-10 max-w-[1000px] mx-auto pb-12">
                                                <ContentRenderer blocks={manualContent} onSkipWarning={() => { }} currentUser={currentUser} textZoom={textZoom} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </main>
                    </div>

                    <Footer />
                </div>
            );
        };

        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
