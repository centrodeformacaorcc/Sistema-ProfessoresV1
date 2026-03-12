const { useState, useEffect, useMemo, useRef } = React;

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

        // Icon definitions
        const ChevronDown = (p) => <Icon name="chevron-down" {...p} />;
        const CheckCircle2 = (p) => <Icon name="check-circle-2" {...p} />;
        const Check = (p) => <Icon name="check" {...p} />;
        const X = (p) => <Icon name="x" {...p} />;
        const Users = (p) => <Icon name="users" {...p} />;
        const Loader2 = (p) => <Icon name="loader-2" {...p} />;
        const Info = (p) => <Icon name="info" {...p} />;
        const AlertTriangle = (p) => <Icon name="alert-triangle" {...p} />;
        const Scan = (p) => <Icon name="scan" {...p} />;
        const XSquare = (p) => <Icon name="x-square" {...p} />;
        const Globe = (p) => <Icon name="globe" {...p} />;
        const SendHorizontal = (p) => <Icon name="send-horizontal" {...p} />;
        const Code = (p) => <Icon name="code" {...p} />;
        const FileSignature = (p) => <Icon name="file-signature" {...p} />;
        const LayoutDashboard = (p) => <Icon name="layout-dashboard" {...p} />;
        const Terminal = (p) => <Icon name="terminal" {...p} />;
        const ClipboardList = (p) => <Icon name="clipboard-list" {...p} />;
        const Eraser = (p) => <Icon name="eraser" {...p} />;
        const Moon = (p) => <Icon name="moon" {...p} />;
        const Sun = (p) => <Icon name="sun" {...p} />;
        const Edit = (p) => <Icon name="edit" {...p} />;
        const Mail = (p) => <Icon name="mail" {...p} />;
        const Lock = (p) => <Icon name="lock" {...p} />;

        // --- CONSTANTS ---
        const MACRO_URL = "https://script.google.com/macros/s/AKfycbx5Go-UGIcQvyA3vefhhl5Rc6-930cG9LsCRb1JPKzTHN5dNfBUCsD063K5RCyANGplEA/exec";
        
        // NOVO URL CONFIGURADO PARA RETIFICAÇÕES:
        const MACRO_RETIFICACAO_URL = "https://script.google.com/macros/s/AKfycbwZAesW7xYMAjW9R10mZe8t1jkBDsIyIjCkEuyl2vhrP9A7dJXOEURHcdWddtQ6n8rD-g/exec";
        
        const MACRO_GET_MPS_URL = "https://api-professor-dashboard.brendonhbrcc.workers.dev/?gid=2116872062";
        const MACRO_AUTH_URL = "https://api-professor-dashboard.brendonhbrcc.workers.dev/?gid=1512246214";

        const LOGO_URL = "https://i.imgur.com/7Q1KoaM.png";

        const CLASS_TYPES_FEEDBACK = [
            { id: 'admin', name: 'Administração e Tecnologia do Fórum', maxScore: 6 },
            { id: 'mil_sci', name: 'Ciências Militares', maxScore: 5 },
            { id: 'mil_career', name: 'Carreira Militar', maxScore: 5 },
            { id: 'practice', name: 'Práticas Militares e Legislação', maxScore: 4 },
        ];

        // --- HOOK DE ROTEAMENTO (Query Params) ---
        const useQueryParams = () => {
            const [search, setSearch] = useState(window.location.search);

            useEffect(() => {
                const handlePopState = () => setSearch(window.location.search);
                window.addEventListener('popstate', handlePopState);
                return () => window.removeEventListener('popstate', handlePopState);
            }, []);

            const searchParams = new URLSearchParams(search);

            const updateParams = (newParams, replace = false) => {
                const current = new URLSearchParams(window.location.search);
                let changed = false;
                Object.keys(newParams).forEach(key => {
                    const val = newParams[key];
                    if (val === null || val === undefined) {
                        if (current.has(key)) { current.delete(key); changed = true; }
                    } else {
                        if (current.get(key) !== val) { current.set(key, val); changed = true; }
                    }
                });
                
                if (changed) {
                    const newUrl = `${window.location.pathname}?${current.toString()}`;
                    if (replace) window.history.replaceState({}, '', newUrl);
                    else window.history.pushState({}, '', newUrl);
                    setSearch(window.location.search);
                }
            };

            return { searchParams, updateParams };
        };

        // --- GLOBAL UTILS ---
        const parseTSVGlobal = (tsv) => {
            let rows = [];
            let currentRow = [];
            let currentCell = '';
            let inQuotes = false;
            
            for (let i = 0; i < tsv.length; i++) {
                let char = tsv[i];
                let nextChar = tsv[i+1];
                
                if (inQuotes) {
                    if (char === '"' && nextChar === '"') {
                        currentCell += '"';
                        i++;
                    } else if (char === '"') {
                        inQuotes = false;
                    } else {
                        currentCell += char;
                    }
                } else {
                    if (char === '"' && currentCell.trim() === '') {
                        inQuotes = true;
                    } else if (char === '\t') {
                        currentRow.push(currentCell);
                        currentCell = '';
                    } else if (char === '\n') {
                        currentRow.push(currentCell);
                        rows.push(currentRow);
                        currentRow = [];
                        currentCell = '';
                    } else if (char === '\r') {
                        if (nextChar !== '\n') currentCell += char;
                    } else {
                        currentCell += char;
                    }
                }
            }
            if (currentCell !== '' || currentRow.length > 0) {
                currentRow.push(currentCell);
                rows.push(currentRow);
            }
            return rows;
        };

        // --- SERVICES ---
        const getForumUsername = async () => {
            try {
                const response = await fetch("/forum", { cache: "no-store" });
                const html = await response.text();
                const regex = /_userdata\["username"\]\s*=\s*"([^"]+)"/;
                const match = html.match(regex);
                if (match && match[1]) return match[1];
                return null;
            } catch (err) {
                return null;
            }
        };

        const sendPrivateMessage = async (username, subject, message) => {
            try {
                const composeResp = await fetch('/privmsg?mode=post', { credentials: 'same-origin', headers: { 'Cache-Control': 'no-store, no-cache' } });
                if (!composeResp.ok) return false;

                const html = await composeResp.text();
                const dom = new DOMParser().parseFromString(html, 'text/html');
                const form = dom.querySelector('form[action*="/privmsg"]');
                if (!form) return false;

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
                const sendResp = await fetch(action, { method: 'POST', body: formData, credentials: 'same-origin' });
                if (!sendResp.ok) return false;

                const textLower = (await sendResp.text()).toLowerCase();
                if (textLower.includes('não existe') || textLower.includes('flood')) return false;

                return true;
            } catch (error) {
                return false;
            }
        };

        const postToForumTopic = async (topicId, message) => {
            try {
                const outputUrl = `/post?t=${topicId}&mode=reply`;
                const loadResp = await fetch(outputUrl, { credentials: 'same-origin', headers: { 'Cache-Control': 'no-store, no-cache' } });
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

                const sendResp = await fetch('/post', { method: 'POST', body: formData, credentials: 'same-origin' });
                if (!sendResp.ok) throw new Error(`Erro na requisição POST (Status: ${sendResp.status})`);

                const respText = (await sendResp.text()).toLowerCase();
                if (respText.includes('flood')) throw new Error('Flood detetado - aguarde.');
                if (respText.includes('não existe') || respText.includes('tópico trancado')) throw new Error('Tópico inexistente ou trancado.');

                return true;
            } catch (error) {
                throw error;
            }
        };

        const postToSheet = async (dataPayload) => {
            try {
                const body = { action: "append_row", gid: "0", data: dataPayload };
                const response = await fetch(MACRO_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(body)
                });
                if (!response.ok) throw new Error(`Erro: ${response.status}`);
                return true;
            } catch (error) {
                throw error;
            }
        };

        const postRectificationToSheet = async (dataPayload) => {
            try {
                // Usa o GID da nova planilha onde ficará os registros de retificações
                const body = { action: "append_row", gid: "240140981", data: dataPayload };
                const response = await fetch(MACRO_RETIFICACAO_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' }, 
                    body: JSON.stringify(body)
                });
                
                const result = await response.json();
                if (result.status === 'error') {
                    throw new Error(result.message);
                }
                
                return true; 
            } catch (error) {
                console.error("Erro ao processar Retificação:", error);
                throw error;
            }
        };

        // --- COMPONENTS ---
        const ToastContainer = ({ toasts, removeToast }) => {
            return (
                <div className="fixed top-4 sm:top-8 right-0 sm:right-4 left-0 sm:left-auto px-4 sm:px-0 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
                    {toasts.map(toast => (
                        <div key={toast.id} className={`pointer-events-auto bg-white dark:bg-[#1a231d] text-slate-800 dark:text-white px-4 sm:px-5 py-3 sm:py-4 rounded-sm flex items-start gap-3 sm:gap-4 border border-slate-200 dark:border-brand/20 border-l-4 animate-slide-in-right ${toast.type === 'success' ? 'border-l-green-500' : toast.type === 'error' ? 'border-l-red-500' : 'border-l-blue-500'}`}>
                            <div className={`mt-0.5 shrink-0 ${toast.type === 'success' ? 'text-green-500' : toast.type === 'error' ? 'text-red-500' : 'text-blue-500'}`}>
                                {toast.type === 'success' ? <CheckCircle2 size={18} className="sm:w-5 sm:h-5" /> : toast.type === 'error' ? <AlertTriangle size={18} className="sm:w-5 sm:h-5" /> : <Info size={18} className="sm:w-5 sm:h-5" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5 sm:mb-1 ${toast.type === 'success' ? 'text-green-600 dark:text-green-400' : toast.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>{toast.title}</h4>
                                <p className="text-[11px] sm:text-xs font-medium leading-relaxed opacity-90 break-words">{toast.message}</p>
                            </div>
                            <button onClick={() => removeToast(toast.id)} className="shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"><X size={14} className="sm:w-4 sm:h-4" /></button>
                        </div>
                    ))}
                </div>
            );
        };

        const BrandHeader = () => (
            <div className="flex items-center gap-2 sm:gap-3 select-none shrink-0 min-w-0">
                <div className="relative shrink-0"><img src={LOGO_URL} alt="CFO" className="h-8 sm:h-10 w-auto" /></div>
                <div className="flex flex-col leading-none shrink-0 whitespace-nowrap">
                    <div className="flex items-baseline gap-1 sm:gap-1.5">
                        <span className="text-lg sm:text-2xl font-condensed font-bold text-slate-900 dark:text-white italic tracking-tighter">CENTRO</span>
                        <span className="text-[10px] sm:text-sm font-serif italic text-brand">de</span>
                        <span className="text-lg sm:text-2xl font-condensed font-bold text-slate-900 dark:text-white italic tracking-tighter">FORMAÇÃO</span>
                    </div>
                    <div className="flex items-baseline gap-1 sm:gap-1.5 -mt-1">
                        <span className="text-[10px] sm:text-sm font-serif italic text-brand">de</span>
                        <span className="text-base sm:text-xl font-display uppercase text-slate-900 dark:text-white tracking-widest">OFICIAIS</span>
                    </div>
                </div>
            </div>
        );

        const ClassFeedbackForm = ({ professor, searchParams, updateParams, initialClassId, initialStartTime, initialStudent, initialVerdict, initialScore, initialComments, addToast }) => {
            const urlAula = searchParams.get('aula');
            
            const [selectedType, setSelectedType] = useState(() => {
                if (initialClassId && initialClassId !== 'admin_activity') {
                    return CLASS_TYPES_FEEDBACK.find(t => t.id === initialClassId) || CLASS_TYPES_FEEDBACK[0];
                }
                if (urlAula) {
                    return CLASS_TYPES_FEEDBACK.find(t => t.id === urlAula) || CLASS_TYPES_FEEDBACK[0];
                }
                return CLASS_TYPES_FEEDBACK[0];
            });

            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const [isAdminActivity, setIsAdminActivity] = useState(initialClassId === 'admin_activity');
            const [students, setStudents] = useState(initialStudent || '');
            const [verdicts, setVerdicts] = useState({});
            const [individualScores, setIndividualScores] = useState({});
            const [individualComments, setIndividualComments] = useState({});
            const [startTime, setStartTime] = useState(new Date());
            const [isSendingSheet, setIsSendingSheet] = useState(false);
            
            const dropdownRef = useRef(null);

            // Sincroniza estado com URL caso o usuário use botões Voltar/Avançar
            useEffect(() => {
                if (urlAula && urlAula !== selectedType.id) {
                    const found = CLASS_TYPES_FEEDBACK.find(t => t.id === urlAula);
                    if (found) setSelectedType(found);
                }
            }, [urlAula]);

            // Atualiza a URL quando o state muda (replace true para montar inicial)
            useEffect(() => {
                updateParams({ aula: selectedType.id }, true);
            }, [selectedType]);

            const studentList = useMemo(() => {
                if (!students.trim()) return [];
                return students.split('/').map(s => s.trim()).filter(s => s.length > 0);
            }, [students]);

            useEffect(() => {
                if (initialStartTime) setStartTime(initialStartTime);
            }, [initialStartTime]);

            useEffect(() => {
                if (studentList.length > 0) {
                    setVerdicts(prev => {
                        const next = { ...prev };
                        studentList.forEach(s => { 
                            if (!next[s]) next[s] = (s === initialStudent && initialVerdict) ? initialVerdict : 'Aprovado'; 
                        });
                        return next;
                    });
                    setIndividualScores(prev => {
                        const next = { ...prev };
                        studentList.forEach(s => { 
                            if (next[s] === undefined) next[s] = (s === initialStudent && initialScore) ? initialScore : (isAdminActivity ? 'Sim' : '0'); 
                        });
                        return next;
                    });
                    setIndividualComments(prev => {
                        const next = { ...prev };
                        studentList.forEach(s => { 
                            if (next[s] === undefined) next[s] = (s === initialStudent && initialComments) ? initialComments : ''; 
                        });
                        return next;
                    });
                }
            }, [studentList, isAdminActivity, initialStudent, initialVerdict, initialScore, initialComments]);

            useEffect(() => {
                const handleClickOutside = (event) => {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsDropdownOpen(false);
                    }
                };
                document.addEventListener("mousedown", handleClickOutside);
                return () => document.removeEventListener("mousedown", handleClickOutside);
            }, []);

            const handleTypeSelect = (t) => {
                setSelectedType(t);
                setIndividualScores({});
                if (t.id !== 'admin') setIsAdminActivity(false);
                setIsDropdownOpen(false);
            };

            const handlePostAndProcess = async () => {
                if (studentList.length === 0) return addToast('error', 'Erro', "Adicione alunos antes de enviar.");
                setIsSendingSheet(true);

                try {
                    const now = new Date();
                    const payload = studentList.map(student => {
                        const verdict = verdicts[student] || 'Aprovado';
                        const scoreVal = individualScores[student] || (isAdminActivity ? 'Sim' : '0');

                        let statusFinal = verdict;
                        if (isAdminActivity) statusFinal = verdict === 'Aprovado' ? 'Aprovado na Atividade' : 'Reprovado na Atividade';
                        
                        const activitySent = isAdminActivity ? scoreVal : "-";
                        const finalScore = isAdminActivity ? "" : scoreVal;

                        return {
                            "Carimbo de data/hora": now.toLocaleString('pt-BR'),
                            "Início": isAdminActivity ? "-" : startTime.toLocaleString('pt-BR'),
                            "Aula aplicada": selectedType.name,
                            "Tipo": isAdminActivity ? "Atividade" : "Aula",
                            "Professor(a)": professor.nickname,
                            "Aluno(a)": student,
                            "Envio da atividade": activitySent,
                            "Comentários/Observações": individualComments[student] || 'Sem observações.',
                            "Status": statusFinal,
                            "Pontuação": finalScore
                        };
                    });

                    await postToSheet(payload);

                    let mpMessage = "";
                    if (isAdminActivity) {
                        const failedStudents = studentList.filter(s => (individualScores[s] || 'Sim') === 'Não');
                        if (failedStudents.length > 0) {
                            try {
                                const resp = await fetch('https://raw.githubusercontent.com/brendonrcc/CFOmps/refs/heads/main/cfoinsa');
                                if (!resp.ok) throw new Error('Falha a carregar o modelo');
                                const template = await resp.text();

                                let sentCount = 0;
                                let errorCount = 0;
                                let failedNicks = [];

                                for (const student of failedStudents) {
                                    const success = await sendPrivateMessage(student, '[CFO] Reprovação na Atividade', template);
                                    if (success) sentCount++; 
                                    else {
                                        errorCount++;
                                        failedNicks.push(student);
                                    }
                                }

                                mpMessage = ` | ${sentCount} MP(s) enviada(s).`;
                                if (errorCount > 0) mpMessage += ` Falha em: ${failedNicks.join(', ')}.`;
                            } catch (e) {
                                mpMessage = " | Erro ao carregar MP.";
                            }
                        }
                    }

                    addToast('success', 'Sucesso', `Dados postados na planilha.${mpMessage}`);
                    setStudents('');
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
                        if (isAdminActivity && value === 'Não') setVerdicts(prev => ({ ...prev, [student]: 'Reprovado' }));
                        else if (isAdminActivity && value === 'Sim') setVerdicts(prev => ({ ...prev, [student]: 'Aprovado' }));
                    }
                }
                if (field === 'comment') setIndividualComments(prev => ({ ...prev, [student]: value }));
            };

            return (
                <div className="animate-fade-in pb-10">
                    <div className="flex flex-col gap-6 sm:gap-8">
                        <div className="bg-slate-50/50 dark:bg-black/10 border border-slate-200 dark:border-brand/20 rounded-lg p-4 sm:p-6 md:p-8 transition-colors">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand mb-4 sm:mb-6 flex items-center gap-2">
                                <LayoutDashboard size={16} /> Dados da aula
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                                <div className="space-y-2 sm:space-y-3">
                                    <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Aula/Curso</label>
                                    
                                    <div className="relative" ref={dropdownRef}>
                                        <button 
                                            type="button"
                                            onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}
                                            className={`w-full h-10 sm:h-12 md:h-14 pl-3 sm:pl-4 pr-10 bg-white dark:bg-black/20 border rounded-md text-xs md:text-sm font-bold text-slate-700 dark:text-white flex items-center justify-between cursor-pointer transition-all uppercase select-none hover:border-brand dark:hover:border-brand ${isDropdownOpen ? 'border-brand ring-1 ring-brand' : 'border-slate-200 dark:border-brand/20'}`}
                                        >
                                            <span className="truncate">{selectedType.name}</span>
                                            <ChevronDown className={`absolute right-3 sm:right-4 text-slate-400 transition-transform duration-200 pointer-events-none ${isDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                                        </button>
                                        
                                        {isDropdownOpen && (
                                            <div className="absolute z-50 w-full mt-2 bg-white dark:bg-[#1a231d] border border-slate-200 dark:border-brand/20 rounded-md overflow-hidden animate-fade-in shadow-lg">
                                                {CLASS_TYPES_FEEDBACK.map(t => (
                                                    <button 
                                                        key={t.id}
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleTypeSelect(t);
                                                        }}
                                                        className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-sm font-bold uppercase transition-colors ${
                                                            selectedType.id === t.id 
                                                                ? 'bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-light' 
                                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-brand dark:hover:text-brand-light'
                                                        }`}
                                                    >
                                                        {t.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {selectedType.id === 'admin' && (
                                        <div className="mt-2 p-2.5 sm:p-3 bg-brand/5 border border-brand/10 rounded-sm flex items-center gap-3 sm:gap-4">
                                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand">Tipo:</span>
                                            <div className="flex items-center gap-2">
                                                <button 
                                                    type="button" 
                                                    onClick={(e) => { e.preventDefault(); setIsAdminActivity(false); }} 
                                                    className={`px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-bold uppercase transition-all ${!isAdminActivity ? 'bg-brand/20 text-brand dark:bg-brand/30 dark:text-brand-light' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5'}`}
                                                >
                                                    Aula
                                                </button>
                                                <button 
                                                    type="button" 
                                                    onClick={(e) => { e.preventDefault(); setIsAdminActivity(true); }} 
                                                    className={`px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-bold uppercase transition-all ${isAdminActivity ? 'bg-brand/20 text-brand dark:bg-brand/30 dark:text-brand-light' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5'}`}
                                                >
                                                    Atividade
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {!isAdminActivity && (
                                    <div className="space-y-2 sm:space-y-3">
                                        <label htmlFor="data-inicio" className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer">Horário de Início</label>
                                        <input id="data-inicio" type="datetime-local" value={formatDateTimeForInput(startTime)} onChange={(e) => setStartTime(new Date(e.target.value))} className="w-full h-10 sm:h-12 md:h-14 px-3 sm:px-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-xs sm:text-sm font-bold text-slate-700 dark:text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all uppercase cursor-pointer" />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2 sm:space-y-3">
                                <label htmlFor="alunos-report" className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer">Aluno (Quando tiver mais de um separe com " / ")</label>
                                <div className="relative">
                                    <Users className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input id="alunos-report" type="text" value={students} onChange={(e) => setStudents(e.target.value)} className="w-full h-10 sm:h-12 md:h-14 pl-9 sm:pl-12 pr-3 sm:pr-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-xs sm:text-sm font-bold text-slate-700 dark:text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all uppercase placeholder-slate-400" placeholder="Ex: Nick1 / Nick2 / Nick3" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {studentList.length > 0 && (
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg sm:text-xl font-condensed font-bold uppercase text-slate-800 dark:text-white transition-colors">
                                        Aluno(s) <span className="text-brand ml-1 sm:ml-2">({studentList.length})</span>
                                    </h3>
                                    <div className="h-px bg-slate-200 dark:bg-brand/20 flex-1 ml-4 sm:ml-6"></div>
                                </div>
                            )}

                            {studentList.length === 0 ? (
                                <div className="py-12 sm:py-16 md:py-20 border-2 border-dashed border-slate-200 dark:border-brand/30 rounded-lg flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-black/10 transition-colors">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-slate-300 dark:text-slate-500 border border-slate-100 dark:border-brand/20 transition-colors">
                                        <Users size={24} className="sm:w-8 sm:h-8" />
                                    </div>
                                    <h4 className="text-sm sm:text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Lista de Alunos Vazia</h4>
                                    <p className="text-slate-400 text-xs sm:text-sm mt-1">Adicione os nicknames no painel acima antes de enviar.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                    {studentList.map((student, idx) => {
                                        const isApproved = verdicts[student] === 'Aprovado';
                                        const isReproved = verdicts[student] === 'Reprovado';
                                        return (
                                            <div key={idx} className="bg-white dark:bg-[#151b17] rounded-lg border border-slate-200 dark:border-brand/20 overflow-hidden group transition-all">
                                                <div className="p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 border-b border-slate-100 dark:border-brand/10 bg-slate-50/50 dark:bg-white/[0.02]">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-black/20 rounded-md border border-slate-200 dark:border-brand/20 overflow-hidden shrink-0 relative flex items-center justify-center">
                                                        <img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${student}&direction=3&head_direction=3&gesture=sml&size=m&headonly=1`} className="object-none" onError={(e) => e.target.style.display = 'none'} />
                                                        <div className={`absolute bottom-0 inset-x-0 h-1 transition-colors ${isApproved ? 'bg-green-500' : isReproved ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Aluno(a)</p>
                                                        <h4 className="text-base sm:text-lg md:text-xl font-condensed font-bold uppercase text-slate-800 dark:text-white truncate transition-colors">{student}</h4>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <div className="flex bg-slate-100 dark:bg-black/40 rounded-md p-1 gap-1 transition-colors">
                                                            <button onClick={() => updateStudentData(student, 'verdict', 'Aprovado')} className={`p-1.5 sm:p-2 rounded-sm transition-all ${isApproved ? 'bg-white dark:bg-white/10 text-green-600 border border-slate-200 dark:border-white/5' : 'text-slate-400 hover:text-green-600'}`} title="Aprovar"><Check size={14} className="sm:w-4 sm:h-4" /></button>
                                                            <button onClick={() => updateStudentData(student, 'verdict', 'Reprovado')} className={`p-1.5 sm:p-2 rounded-sm transition-all ${isReproved ? 'bg-white dark:bg-white/10 text-red-600 border border-slate-200 dark:border-white/5' : 'text-slate-400 hover:text-red-600'}`} title="Reprovar"><X size={14} className="sm:w-4 sm:h-4" /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
                                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                                        <div className="w-full sm:w-1/3">
                                                            <label htmlFor={`pontuacao-${student}`} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5 sm:mb-2 cursor-pointer">{isAdminActivity ? 'Envio da Atividade' : 'Pontuação'}</label>
                                                            {isAdminActivity ? (
                                                                <select id={`pontuacao-${student}`} value={individualScores[student] || 'Sim'} onChange={(e) => updateStudentData(student, 'score', e.target.value)} className="w-full h-9 sm:h-10 px-2 sm:px-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-[11px] sm:text-xs font-bold uppercase outline-none focus:border-brand focus:ring-1 focus:ring-brand text-slate-700 dark:text-white cursor-pointer transition-colors">
                                                                    <option value="Sim">Sim</option>
                                                                    <option value="Não">Não</option>
                                                                </select>
                                                            ) : (
                                                                <div className="relative">
                                                                    <input id={`pontuacao-${student}`} type="number" value={individualScores[student] || ''} onChange={(e) => updateStudentData(student, 'score', e.target.value)} min="0" max={selectedType.maxScore} className="w-full h-9 sm:h-10 px-2 sm:px-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-[11px] sm:text-xs font-bold text-center outline-none focus:border-brand focus:ring-1 focus:ring-brand text-slate-700 dark:text-white placeholder-slate-400 transition-colors" placeholder="0" />
                                                                    <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-[9px] sm:text-[10px] text-slate-400 pointer-events-none">/{selectedType.maxScore}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="w-full sm:w-2/3">
                                                            <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5 sm:mb-2">Resultado</label>
                                                            <div className={`h-9 sm:h-10 px-3 sm:px-4 flex items-center justify-center rounded-md font-bold uppercase text-[9px] sm:text-[10px] tracking-wide border transition-colors ${isApproved ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400' : isReproved ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400' : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-brand/20 text-slate-500'}`}>
                                                                {isApproved ? 'Aprovado' : 'Reprovado'}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor={`obs-${student}`} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5 sm:mb-2 cursor-pointer">Observações</label>
                                                        <textarea id={`obs-${student}`} value={individualComments[student] || ''} onChange={(e) => updateStudentData(student, 'comment', e.target.value)} rows={2} className="w-full p-2 sm:p-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-[11px] sm:text-xs text-slate-700 dark:text-white outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none placeholder-slate-400/50 leading-relaxed transition-colors" placeholder="Digite observações relevantes..." />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-brand/20 flex justify-end gap-4 transition-colors">
                                <button onClick={handlePostAndProcess} disabled={isSendingSheet || studentList.length === 0} className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 bg-brand hover:bg-brand-hover text-white font-condensed font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm transition-all flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isSendingSheet ? (
                                        <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                            <Loader2 size={16} className="animate-spin sm:w-5 sm:h-5" />
                                            <span>A enviar...</span>
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                            <SendHorizontal size={16} className="sm:w-5 sm:h-5" />
                                            <span>Postar</span>
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
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

            const REQUIRED_TAGS = [
                { name: 'Negrito', check: (text) => text.toLowerCase().includes('[/b]') },
                { name: 'Itálico', check: (text) => text.toLowerCase().includes('[/i]') },
                { name: 'Sublinhado', check: (text) => text.toLowerCase().includes('[/u]') },
                { name: 'Riscado', check: (text) => text.toLowerCase().includes('[/strike]') },
                { name: 'Spoiler', check: (text) => text.toLowerCase().includes('[/spoiler]') },
                { name: 'Tabela', check: (text) => text.toLowerCase().includes('[/table]') },
                { name: 'Imagem', check: (text) => /\[img.*?\]/i.test(text) || text.toLowerCase().includes('[/img]') },
                { name: 'Fonte', check: (text) => text.toLowerCase().includes('[/font]') },
                { name: 'Link/URL', check: (text) => text.toLowerCase().includes('[url=') },
                { name: 'Tamanho', check: (text) => text.toLowerCase().includes('[size=') },
                { name: 'Cor', check: (text) => text.toLowerCase().includes('[color=') }
            ];

            const handleCheck = () => { 
                if (!bbcodeInput.trim()) return; 
                const missingTags = REQUIRED_TAGS.filter(tag => !tag.check(bbcodeInput)).map(tag => tag.name); 
                setResult({ approved: missingTags.length === 0, missing: missingTags, checked: true }); 
            };
            const handleClear = () => { setStudentNick(''); setBbcodeInput(''); setResult({ approved: false, missing: [], checked: false }); };

            const handleMpSend = async (isApproval) => {
                if (!studentNick.trim()) return addToast('error', 'Erro', 'Informe o nickname.');
                const recipients = studentNick.split('/').map(n => n.trim()).filter(n => n.length > 0);
                if (recipients.length === 0) return;

                setSendingMp(true);
                let successCount = 0; let failCount = 0; let failedNicks = [];
                const delay = (ms) => new Promise(r => setTimeout(r, ms));

                try {
                    const url = isApproval ? "https://raw.githubusercontent.com/brendonrcc/CFOmps/refs/heads/main/cfoapro" : "https://raw.githubusercontent.com/brendonrcc/CFOmps/refs/heads/main/cforep";
                    const resp = await fetch(url);
                    if (!resp.ok) throw new Error('Falha ao carregar o modelo');
                    const template = await resp.text();

                    let motives = "";
                    if (isApproval) motives = "Cumpriu os requisitos.";
                    else {
                        const missingNames = [...result.missing];
                        if (missingNames.length === 0) motives = "Erro desconhecido.";
                        else if (missingNames.length === 1) motives = `Faltou o uso de ${missingNames[0]}.`;
                        else { const last = missingNames.pop(); motives = `Faltou o uso de ${missingNames.join(', ')} e ${last}.`; }
                    }

                    const messageBody = template.replace('{MOTIVOS}', motives);
                    const subject = isApproval ? "[CFO] Aprovação na Atividade" : "[CFO] Reprovação na Atividade";

                    for (let i = 0; i < recipients.length; i++) {
                        const recipient = recipients[i];
                        setMpButtonLabel(`(${i + 1}/${recipients.length}) A enviar...`);
                        try {
                            const success = await sendPrivateMessage(recipient, subject, messageBody);
                            if (success) successCount++; else { failCount++; failedNicks.push(recipient); }
                        } catch (e) { failCount++; failedNicks.push(recipient); }

                        if (i < recipients.length - 1) {
                            for (let s = 10; s > 0; s--) { setMpButtonLabel(`Aguardando... ${s}s`); await delay(1000); }
                        }
                    }

                    if (successCount > 0) {
                        let msg = `Enviado para ${successCount}.`;
                        if (failCount > 0) msg += ` Falha em: ${failedNicks.join(', ')}.`;
                        addToast('success', 'Relatório', msg);
                    } else addToast('error', 'Erro', `Falha total no envio. Verifique os seguintes nicknames: ${failedNicks.join(', ')}`);
                } catch (error) { addToast('error', 'Erro', `Erro: ${error.message}`); } 
                finally { setSendingMp(false); setMpButtonLabel(''); }
            };

            const handlePaste = async () => {
                try {
                    const text = await navigator.clipboard.readText();
                    setBbcodeInput(text);
                    if (result.checked) setResult({ ...result, checked: false });
                } catch (err) { addToast('error', 'Bloqueado', "Cole manualmente (Ctrl+V) na área de transferência."); }
            };

            const handlePostReport = (approved) => {
                if (!studentNick.trim()) return addToast('error', 'Erro', 'Preencha o nickname do aluno.');
                let reasons = "Sem observações.";
                if (!approved && result.missing.length > 0) {
                    const missingNames = [...result.missing];
                    if (missingNames.length === 1) reasons = `Faltou utilizar: ${missingNames[0]}.`;
                    else { const last = missingNames.pop(); reasons = `Faltou utilizar: ${missingNames.join(', ')} e ${last}.`; }
                }
                onNavigateToReport({ nick: studentNick, approved: approved, comments: reasons });
            };

            const handleForumPost = async () => {
                if (!studentNick.trim()) return addToast('error', 'Erro', "Preencha o nickname do aluno.");
                setPostingForum(true);
                const status = result.approved ? 'Aprovado' : 'Reprovado';
                const motivo = result.approved ? 'Cumpriu os requisitos.' : 'Não cumpriu os requisitos.';
                const message = `[font=Poppins][center][color=#528c16][b]RESULTADO DA ATIVIDADE[/b][/color][/center]\n\n[color=#528c16][b]Professor(a):[/b][/color] ${currentUser.nickname}\n[color=#528c16][b]Aluno(a):[/b][/color] ${studentNick}\n[color=#528c16][b]Veredito:[/b][/color] ${status}\n[color=#528c16][b]Motivo(s):[/b][/color] ${motivo}\n[color=#528c16][b]Spoiler:[/b][/color]\n[spoiler="Atividade"]${bbcodeInput}[/spoiler][/font]`;

                try {
                    await postToForumTopic(38888, message);
                    addToast('success', 'Sucesso', 'Postagem realizada com sucesso!');
                } catch (e) { addToast('error', 'Erro', 'Erro ao postar: ' + e.message); } 
                finally { setPostingForum(false); }
            };

            return (
                <div className="animate-fade-in pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <div className="relative bg-[#1e1e1e] border border-slate-300 dark:border-brand/30 rounded-md flex flex-col h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden">
                                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between px-3 sm:px-4 py-2 bg-[#252526] border-b border-[#333333] dark:border-brand/20 gap-2">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono flex items-center gap-1.5 sm:gap-2">
                                            <Terminal size={12} className="text-brand-accent shrink-0" /> Editor BBCode
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <button onClick={handlePaste} className="px-2 py-1.5 hover:bg-[#333333] rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-slate-400 hover:text-white transition-colors flex items-center gap-1 shrink-0"><ClipboardList size={12} /> Colar</button>
                                        <button onClick={handleClear} className="px-2 py-1.5 hover:bg-[#333333] rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-slate-400 hover:text-red-400 transition-colors flex items-center gap-1 shrink-0"><Eraser size={12} /> Limpar</button>
                                    </div>
                                </div>

                                <div className="flex-1 flex relative overflow-hidden">
                                    <div className="w-8 sm:w-10 bg-[#1e1e1e] border-r border-[#333333] dark:border-brand/20 flex flex-col items-end py-3 sm:py-4 pr-1.5 sm:pr-2 text-[#858585] font-mono text-[10px] sm:text-xs select-none">
                                        {Array.from({ length: 20 }).map((_, i) => <div key={i} className="leading-relaxed">{i + 1}</div>)}
                                    </div>
                                    <textarea
                                        value={bbcodeInput}
                                        onChange={(e) => { setBbcodeInput(e.target.value); if (result.checked) setResult({ ...result, checked: false }); }}
                                        placeholder="// Cole o código BBCode da atividade aqui..."
                                        className="flex-1 w-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-[11px] sm:text-xs p-3 sm:p-4 resize-none focus:outline-none leading-relaxed custom-scrollbar selection:bg-[#264f78]"
                                        spellCheck="false"
                                    />
                                </div>

                                <div className="px-3 sm:px-4 py-1.5 bg-[#007acc] text-white text-[9px] sm:text-[10px] font-mono flex items-center justify-between shrink-0">
                                    <div className="flex gap-3 sm:gap-4"><span>UTF-8</span><span>BBCODE</span></div>
                                    <span>Ln {bbcodeInput.split('\n').length}, Col {bbcodeInput.length}</span>
                                </div>
                            </div>

                            <div className="p-3 sm:p-4 bg-white dark:bg-[#151b17] border border-slate-200 dark:border-brand/20 rounded-sm flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center transition-colors">
                                <div className="relative w-full sm:flex-1">
                                    <label htmlFor="aluno-correcao" className="sr-only">Nickname do Aluno</label>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Users size={14} className="text-slate-400" /></div>
                                    <input
                                        id="aluno-correcao"
                                        type="text"
                                        value={studentNick}
                                        onChange={(e) => setStudentNick(e.target.value)}
                                        placeholder="NICKNAME DO ALUNO"
                                        className="w-full pl-9 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all text-[11px] sm:text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-white"
                                    />
                                </div>
                                <button
                                    onClick={handleCheck}
                                    disabled={!bbcodeInput.trim()}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2.5 bg-brand hover:bg-brand-hover text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0"
                                >
                                    <Scan size={14} className="sm:w-4 sm:h-4" /> <span className="mt-0.5">Executar Análise</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {result.checked ? (
                                <div className={`h-full bg-white dark:bg-[#151b17] border-2 ${result.approved ? 'border-green-500' : 'border-red-500'} rounded-sm p-0 flex flex-col relative overflow-hidden animate-fade-in transition-colors`}>
                                    <div className={`${result.approved ? 'bg-green-500' : 'bg-red-500'} p-4 sm:p-6 text-center text-white`}>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm">
                                            {result.approved ? <CheckCircle2 size={24} className="sm:w-8 sm:h-8" /> : <XSquare size={24} className="sm:w-8 sm:h-8" />}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-condensed font-bold uppercase italic tracking-wider leading-none">
                                            {result.approved ? 'APROVADO' : 'REPROVADO'}
                                        </h3>
                                        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-80 font-mono mt-1">STATUS DA VERIFICAÇÃO</p>
                                    </div>

                                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-3 sm:mb-4 text-center border-b border-slate-100 dark:border-brand/10 pb-3 sm:pb-4 transition-colors">
                                                {result.approved ? "O código submetido atende integralmente aos padrões de formatação exigidos." : "Foram identificadas inconsistências estruturais no código submetido."}
                                            </p>

                                            {!result.approved && result.missing.length > 0 && (
                                                <div className="space-y-2 sm:space-y-3">
                                                    <div className="flex items-center gap-1.5 sm:gap-2 text-red-500">
                                                        <AlertTriangle size={12} className="sm:w-3.5 sm:h-3.5" />
                                                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Ausência de:</span>
                                                    </div>
                                                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-500/20 rounded-sm p-2.5 sm:p-3 transition-colors">
                                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                            {result.missing.map((tag, idx) => (
                                                                <span key={idx} className="px-1.5 sm:px-2 py-1 bg-white dark:bg-black/40 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 rounded-sm text-[9px] sm:text-[10px] font-mono font-bold flex items-center gap-1 transition-colors">
                                                                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-red-500 rounded-full"></span>
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-2.5 sm:gap-3">
                                            {result.approved ? (
                                                <>
                                                    <button onClick={() => handlePostReport(true)} className="w-full py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-sm text-[9px] sm:text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2 transition-all group">
                                                        <FileSignature size={14} className="group-hover:scale-110 transition-transform" /> Postar Aprovação
                                                    </button>
                                                    <button onClick={handleForumPost} disabled={postingForum} className="w-full py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm text-[9px] sm:text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2 transition-all group disabled:opacity-50">
                                                        {postingForum ? (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <Loader2 size={14} className="animate-spin" />
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <Globe size={14} className="group-hover:scale-110 transition-transform" /> Postar no Fórum
                                                            </span>
                                                        )}
                                                    </button>
                                                    <button onClick={() => handleMpSend(true)} disabled={sendingMp} className="w-full py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-sm text-[9px] sm:text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2 transition-all group disabled:opacity-50">
                                                        {sendingMp ? (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <Loader2 size={14} className="animate-spin" />
                                                                <span className="truncate">{mpButtonLabel || 'A enviar...'}</span>
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <SendHorizontal size={14} className="group-hover:scale-110 transition-transform" /> Enviar MP Aprovação
                                                            </span>
                                                        )}
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button onClick={() => handlePostReport(false)} className="w-full py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm text-[9px] sm:text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2 transition-all group">
                                                        <FileSignature size={14} className="group-hover:scale-110 transition-transform" /> Postar Reprovação
                                                    </button>
                                                    <button onClick={handleForumPost} disabled={postingForum} className="w-full py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm text-[9px] sm:text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2 transition-all group disabled:opacity-50">
                                                        {postingForum ? (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <Loader2 size={14} className="animate-spin" />
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <Globe size={14} className="group-hover:scale-110 transition-transform" /> Postar no Fórum
                                                            </span>
                                                        )}
                                                    </button>
                                                    <button onClick={() => handleMpSend(false)} disabled={sendingMp} className="w-full py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm text-[9px] sm:text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2 transition-all group disabled:opacity-50">
                                                        {sendingMp ? (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <Loader2 size={14} className="animate-spin" />
                                                                <span className="truncate">{mpButtonLabel || 'A enviar...'}</span>
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                                                <SendHorizontal size={14} className="group-hover:scale-110 transition-transform" /> Enviar MP Reprovação
                                                            </span>
                                                        )}
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full bg-slate-50 dark:bg-black/10 border border-slate-200 dark:border-brand/20 rounded-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center opacity-60 border-dashed transition-colors">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-white/5 border border-slate-100 dark:border-brand/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-slate-400 transition-colors">
                                        <Code size={32} className="sm:w-10 sm:h-10" />
                                    </div>
                                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2">Aguardando Input</h4>
                                    <p className="text-[11px] sm:text-xs text-slate-400 max-w-[200px] leading-relaxed">Cole o código BBCode ao lado para iniciar a verificação automática.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        const RectificationForm = ({ professor, searchParams, updateParams, addToast }) => {
            const urlAula = searchParams.get('aula');
            
            const [selectedType, setSelectedType] = useState(() => {
                if (urlAula) {
                    return CLASS_TYPES_FEEDBACK.find(t => t.id === urlAula) || CLASS_TYPES_FEEDBACK[0];
                }
                return CLASS_TYPES_FEEDBACK[0];
            });
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const [rowNumber, setRowNumber] = useState('');
            const [errorText, setErrorText] = useState('');
            const [correctionText, setCorrectionText] = useState('');
            const [isSending, setIsSending] = useState(false);
            
            const dropdownRef = useRef(null);

            useEffect(() => {
                if (urlAula && urlAula !== selectedType.id) {
                    const found = CLASS_TYPES_FEEDBACK.find(t => t.id === urlAula);
                    if (found) setSelectedType(found);
                }
            }, [urlAula]);

            useEffect(() => {
                const handleClickOutside = (event) => {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsDropdownOpen(false);
                    }
                };
                document.addEventListener("mousedown", handleClickOutside);
                return () => document.removeEventListener("mousedown", handleClickOutside);
            }, []);

            const handleTypeSelect = (t) => {
                setSelectedType(t);
                setIsDropdownOpen(false);
                updateParams({ aula: t.id }, true);
            };

            const handlePost = async () => {
                if (!rowNumber.trim() || !errorText.trim() || !correctionText.trim()) {
                    return addToast('error', 'Erro', "Preencha todos os campos antes de enviar.");
                }
                setIsSending(true);

                try {
                    const payload = [{
                        "Carimbo de data/hora": new Date().toLocaleString('pt-BR'),
                        "Nickname": professor.nickname,
                        "Aula/Curso": selectedType.name,
                        "Linha da planilha": rowNumber,
                        "Erro": errorText,
                        "Correção": correctionText
                    }];

                    await postRectificationToSheet(payload);

                    addToast('success', 'Sucesso', 'Retificação enviada para a planilha!');
                    setRowNumber('');
                    setErrorText('');
                    setCorrectionText('');
                } catch (error) {
                    addToast('error', 'Erro', 'Falha ao enviar. Verifique o link do Macro.');
                } finally {
                    setIsSending(false);
                }
            };

            return (
                <div className="animate-fade-in pb-10">
                    <div className="flex flex-col gap-6 sm:gap-8">
                        <div className="bg-slate-50/50 dark:bg-black/10 border border-slate-200 dark:border-brand/20 rounded-lg p-4 sm:p-6 md:p-8 transition-colors">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand mb-4 sm:mb-6 flex items-center gap-2">
                                <Edit size={16} /> Dados da Retificação
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                                <div className="space-y-2 sm:space-y-3">
                                    <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Aula/Curso</label>
                                    
                                    <div className="relative" ref={dropdownRef}>
                                        <button 
                                            type="button"
                                            onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}
                                            className={`w-full h-10 sm:h-12 md:h-14 pl-3 sm:pl-4 pr-10 bg-white dark:bg-black/20 border rounded-md text-xs md:text-sm font-bold text-slate-700 dark:text-white flex items-center justify-between cursor-pointer transition-all uppercase select-none hover:border-brand dark:hover:border-brand ${isDropdownOpen ? 'border-brand ring-1 ring-brand' : 'border-slate-200 dark:border-brand/20'}`}
                                        >
                                            <span className="truncate">{selectedType.name}</span>
                                            <ChevronDown className={`absolute right-3 sm:right-4 text-slate-400 transition-transform duration-200 pointer-events-none ${isDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                                        </button>
                                        
                                        {isDropdownOpen && (
                                            <div className="absolute z-50 w-full mt-2 bg-white dark:bg-[#1a231d] border border-slate-200 dark:border-brand/20 rounded-md overflow-hidden animate-fade-in shadow-lg">
                                                {CLASS_TYPES_FEEDBACK.map(t => (
                                                    <button 
                                                        key={t.id}
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleTypeSelect(t);
                                                        }}
                                                        className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-sm font-bold uppercase cursor-pointer transition-colors ${
                                                            selectedType.id === t.id 
                                                                ? 'bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-light' 
                                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-brand dark:hover:text-brand-light'
                                                        }`}
                                                    >
                                                        {t.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2 sm:space-y-3">
                                    <label htmlFor="linha-planilha" className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer">Linha da Planilha</label>
                                    <input 
                                        id="linha-planilha"
                                        type="number" 
                                        value={rowNumber} 
                                        onChange={(e) => setRowNumber(e.target.value)} 
                                        className="w-full h-10 sm:h-12 md:h-14 px-3 sm:px-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-xs sm:text-sm font-bold text-slate-700 dark:text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-slate-400" 
                                        placeholder="Ex: 42" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="space-y-2 sm:space-y-3">
                                    <label htmlFor="erro-texto" className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer">Erro</label>
                                    <textarea 
                                        id="erro-texto"
                                        value={errorText} 
                                        onChange={(e) => setErrorText(e.target.value)} 
                                        rows={3} 
                                        className="w-full p-3 sm:p-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-xs sm:text-sm text-slate-700 dark:text-white outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none placeholder-slate-400/50 leading-relaxed transition-colors" 
                                        placeholder="Descreva o erro que consta na planilha..." 
                                    />
                                </div>

                                <div className="space-y-2 sm:space-y-3">
                                    <label htmlFor="correcao-texto" className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer">Correção</label>
                                    <textarea 
                                        id="correcao-texto"
                                        value={correctionText} 
                                        onChange={(e) => setCorrectionText(e.target.value)} 
                                        rows={3} 
                                        className="w-full p-3 sm:p-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-xs sm:text-sm text-slate-700 dark:text-white outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none placeholder-slate-400/50 leading-relaxed transition-colors" 
                                        placeholder="Descreva como os dados devem ficar corrigidos..." 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 sm:mt-4 pt-4 sm:pt-6 border-t border-slate-200 dark:border-brand/20 flex justify-end gap-4 transition-colors">
                            <button 
                                onClick={handlePost} 
                                disabled={isSending || !rowNumber.trim() || !errorText.trim() || !correctionText.trim()} 
                                className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 bg-brand hover:bg-brand-hover text-white font-condensed font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm transition-all flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-not-allowed"
                            >
                                {isSending ? (
                                    <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                        <Loader2 size={16} className="animate-spin sm:w-5 sm:h-5" />
                                        <span>A enviar...</span>
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                        <SendHorizontal size={16} className="sm:w-5 sm:h-5" />
                                        <span>Postar Retificação</span>
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        const MpSenderForm = ({ professor, searchParams, updateParams, addToast }) => {
            const urlAula = searchParams.get('aula');
            const urlTipo = searchParams.get('tipo');

            const [selectedType, setSelectedType] = useState(() => {
                if (urlAula) {
                    return CLASS_TYPES_FEEDBACK.find(t => t.id === urlAula) || CLASS_TYPES_FEEDBACK[0];
                }
                return CLASS_TYPES_FEEDBACK[0];
            });

            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            
            const [materialType, setMaterialType] = useState(() => {
                if (urlAula === 'admin' && urlTipo === 'atividade') return 'Atividade';
                return 'Apostila';
            });

            const [students, setStudents] = useState('');
            const [isSending, setIsSending] = useState(false);
            const [sendProgress, setSendProgress] = useState('');
            
            const [templates, setTemplates] = useState([]);
            const [isLoadingTemplates, setIsLoadingTemplates] = useState(true);
            const dropdownRef = useRef(null);

            // Sync URL params for initial changes
            useEffect(() => {
                if (urlAula && urlAula !== selectedType.id) {
                    const found = CLASS_TYPES_FEEDBACK.find(t => t.id === urlAula);
                    if (found) setSelectedType(found);
                }
            }, [urlAula]);

            useEffect(() => {
                if (selectedType.id === 'admin' && urlTipo) {
                    const mapped = urlTipo.toLowerCase() === 'atividade' ? 'Atividade' : 'Apostila';
                    if (materialType !== mapped) {
                        setMaterialType(mapped);
                    }
                }
            }, [urlTipo, selectedType.id]);

            useEffect(() => {
                let newType = '';
                if (selectedType.id === 'admin') {
                    newType = (urlTipo && urlTipo.toLowerCase() === 'atividade') ? 'Atividade' : 'Apostila';
                } else if (selectedType.id === 'practice') newType = 'Certificado';
                else if (selectedType.id === 'mil_sci') newType = 'Apostila';
                else if (selectedType.id === 'mil_career') newType = 'Apostila';

                setMaterialType(newType);
                if (newType) {
                    updateParams({ aula: selectedType.id, tipo: newType.toLowerCase() }, true);
                } else {
                    updateParams({ aula: selectedType.id, tipo: null }, true);
                }
            }, [selectedType.id]);

            useEffect(() => {
                const handleClickOutside = (event) => {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsDropdownOpen(false);
                    }
                };
                document.addEventListener("mousedown", handleClickOutside);
                return () => document.removeEventListener("mousedown", handleClickOutside);
            }, []);

            useEffect(() => {
                const fetchTemplates = async () => {
                    setIsLoadingTemplates(true);
                    try {
                        const response = await fetch(MACRO_GET_MPS_URL);
                        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                        const text = await response.text();
                        
                        let dataToUse = [];
                        try {
                            const result = JSON.parse(text);
                            dataToUse = result.data || result.values || result;
                        } catch(e) {
                            dataToUse = parseTSVGlobal(text);
                        }

                        let mapped = [];
                        if (dataToUse.length > 0) {
                            let startIndex = 0;
                            const validTags = ['ADM', 'ADMATV', 'CM', 'CAM', 'PML'];
                            const firstCell = dataToUse[0][0] ? dataToUse[0][0].toString().trim().toUpperCase() : '';
                            
                            if (firstCell && !validTags.includes(firstCell)) {
                                startIndex = 1;
                            }
                            
                            mapped = dataToUse.slice(startIndex).map(row => ({
                                tag: row[0] ? row[0].toString().trim() : "",
                                titulo: row[1] ? row[1].toString().trim() : "",
                                bbcode: row[2] ? row[2].toString() : ""
                            })).filter(item => item.tag && item.tag.length > 0);
                        }

                        if (mapped.length > 0) {
                            setTemplates(mapped);
                        } else {
                            addToast('error', 'Sem Dados', 'Não foram encontrados templates de MP na base de dados.');
                        }
                    } catch (error) {
                        console.error(error);
                        addToast('error', 'Falha na Ligação', 'Verifique a ligação com a API do Cloudflare Worker.');
                    } finally {
                        setIsLoadingTemplates(false);
                    }
                };
                fetchTemplates();
            }, []);

            const handleTypeSelect = (t) => {
                setSelectedType(t);
                setIsDropdownOpen(false);
            };

            const handleSetMaterialType = (t) => {
                setMaterialType(t);
                updateParams({ tipo: t.toLowerCase() });
            };

            const handleSend = async () => {
                if (!students.trim()) return addToast('error', 'Erro', "Preencha o nickname do(s) aluno(s).");
                if (!materialType) return addToast('error', 'Erro', "Nenhum material configurado para envio.");
                if (templates.length === 0) return addToast('error', 'Sem Templates', "A base de dados não forneceu os textos das MPs ou a ligação falhou.");

                const studentList = students.split('/').map(s => s.trim()).filter(s => s.length > 0);
                if (studentList.length === 0) return;

                let targetTag = '';
                if (selectedType.id === 'admin') {
                    targetTag = materialType === 'Apostila' ? 'ADM' : 'ADMAtv';
                } else if (selectedType.id === 'mil_sci') {
                    targetTag = 'CM';
                } else if (selectedType.id === 'mil_career') {
                    targetTag = 'CAM';
                } else if (selectedType.id === 'practice') {
                    targetTag = 'PML';
                }

                const template = templates.find(t => t.tag.toUpperCase() === targetTag.toUpperCase());

                if (!template) {
                    const allTags = Array.from(new Set(templates.map(t => t.tag))).join(', ');
                    return addToast('error', 'Erro de Template', `Template não encontrado para a TAG "${targetTag}". TAGs presentes na base de dados: [${allTags.substring(0, 50)}...]`);
                }

                setIsSending(true);
                setSendProgress('');
                let successCount = 0;
                let failCount = 0;
                let failedNicks = [];
                const delay = (ms) => new Promise(r => setTimeout(r, ms));

                let subject = template.titulo;
                let messageBody = template.bbcode;
                
                messageBody = messageBody.replace(/\{PROFESSOR\}/gi, professor.nickname);

                try {
                    for (let i = 0; i < studentList.length; i++) {
                        const recipient = studentList[i];
                        setSendProgress(`(${i + 1}/${studentList.length}) A enviar para ${recipient}...`);
                        
                        try {
                            const success = await sendPrivateMessage(recipient, subject, messageBody);
                            if (success) successCount++; else { failCount++; failedNicks.push(recipient); }
                        } catch (e) { failCount++; failedNicks.push(recipient); }

                        if (i < studentList.length - 1) {
                            for (let s = 10; s > 0; s--) { 
                                setSendProgress(`Aguardando... ${s}s`); 
                                await delay(1000); 
                            }
                        }
                    }

                    if (successCount > 0) {
                        let msg = `Enviada para ${successCount}.`;
                        if (failCount > 0) msg += ` Falha em: ${failedNicks.join(', ')}.`;
                        addToast('success', 'Sucesso', msg);
                        setStudents('');
                    } else {
                        addToast('error', 'Erro', `Falha total no envio. Verifique os seguintes nicknames: ${failedNicks.join(', ')}`);
                    }
                } catch (error) {
                    addToast('error', 'Erro', `Erro: ${error.message}`);
                } finally {
                    setIsSending(false);
                    setSendProgress('');
                }
            };

            return (
                <div className="animate-fade-in pb-10">
                    <div className="flex flex-col gap-6 sm:gap-8">
                        <div className="bg-slate-50/50 dark:bg-black/10 border border-slate-200 dark:border-brand/20 rounded-lg p-4 sm:p-6 md:p-8 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-brand flex items-center gap-2">
                                    <Mail size={16} /> Envio de Material (MP)
                                </h3>
                                {isLoadingTemplates ? (
                                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Loader2 size={12} className="animate-spin" /> A carregar base de dados...</span>
                                ) : templates.length > 0 ? (
                                    <span className="text-[10px] sm:text-[11px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-1.5"><CheckCircle2 size={12} /> {templates.length} MPs Sincronizadas</span>
                                ) : (
                                    <span className="text-[10px] sm:text-[11px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5"><AlertTriangle size={12} /> Erro de Sincronização</span>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                                <div className="space-y-2 sm:space-y-3">
                                    <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Aula/Curso</label>
                                    <div className="relative" ref={dropdownRef}>
                                        <button 
                                            type="button"
                                            onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}
                                            className={`w-full h-10 sm:h-12 md:h-14 pl-3 sm:pl-4 pr-10 bg-white dark:bg-black/20 border rounded-md text-xs md:text-sm font-bold text-slate-700 dark:text-white flex items-center justify-between cursor-pointer transition-all uppercase select-none hover:border-brand dark:hover:border-brand ${isDropdownOpen ? 'border-brand ring-1 ring-brand' : 'border-slate-200 dark:border-brand/20'}`}
                                        >
                                            <span className="truncate">{selectedType.name}</span>
                                            <ChevronDown className={`absolute right-3 sm:right-4 text-slate-400 transition-transform duration-200 pointer-events-none ${isDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute z-50 w-full mt-2 bg-white dark:bg-[#1a231d] border border-slate-200 dark:border-brand/20 rounded-md overflow-hidden animate-fade-in shadow-lg">
                                                {CLASS_TYPES_FEEDBACK.map(t => (
                                                    <button 
                                                        key={t.id}
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleTypeSelect(t);
                                                        }}
                                                        className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-sm font-bold uppercase cursor-pointer transition-colors ${
                                                            selectedType.id === t.id 
                                                                ? 'bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-light' 
                                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-brand dark:hover:text-brand-light'
                                                        }`}
                                                    >
                                                        {t.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {selectedType.id === 'admin' ? (
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Tipo de Material</label>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-start gap-4 sm:gap-6 h-auto sm:h-12 md:h-14 py-3 sm:py-0 px-3 sm:px-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md">
                                            <button 
                                                type="button" 
                                                onClick={(e) => { e.preventDefault(); handleSetMaterialType('Apostila'); }} 
                                                className={`px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-bold uppercase transition-all ${materialType === 'Apostila' ? 'bg-brand/20 text-brand dark:bg-brand/30 dark:text-brand-light' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5'}`}
                                            >
                                                Apostila
                                            </button>
                                            <button 
                                                type="button" 
                                                onClick={(e) => { e.preventDefault(); handleSetMaterialType('Atividade'); }} 
                                                className={`px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-bold uppercase transition-all ${materialType === 'Atividade' ? 'bg-brand/20 text-brand dark:bg-brand/30 dark:text-brand-light' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5'}`}
                                            >
                                                Atividade
                                            </button>
                                        </div>
                                    </div>
                                ) : selectedType.id === 'practice' ? (
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Tipo de Material</label>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 h-auto sm:h-12 md:h-14 py-3 sm:py-0 px-3 sm:px-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md opacity-70">
                                            <button type="button" className="px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-bold uppercase bg-brand/20 text-brand dark:bg-brand/30 dark:text-brand-light cursor-default">
                                                Certificado
                                            </button>
                                        </div>
                                    </div>
                                ) : selectedType.id === 'mil_sci' ? (
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Tipo de Material</label>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 h-auto sm:h-12 md:h-14 py-3 sm:py-0 px-3 sm:px-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md opacity-70">
                                            <button type="button" className="px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-bold uppercase bg-brand/20 text-brand dark:bg-brand/30 dark:text-brand-light cursor-default">
                                                Apostila
                                            </button>
                                        </div>
                                    </div>
                                ) : selectedType.id === 'mil_career' ? (
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Tipo de Material</label>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 h-auto sm:h-12 md:h-14 py-3 sm:py-0 px-3 sm:px-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md opacity-70">
                                            <button type="button" className="px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-bold uppercase bg-brand/20 text-brand dark:bg-brand/30 dark:text-brand-light cursor-default">
                                                Apostila
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Tipo de Material</label>
                                        <div className="flex items-center justify-center h-10 sm:h-12 md:h-14 px-3 sm:px-4 bg-slate-50 dark:bg-white/5 border border-dashed border-slate-200 dark:border-brand/20 rounded-md">
                                            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 text-center">Nenhum material disponível</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2 sm:space-y-3">
                                <label htmlFor="mp-alunos" className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block cursor-pointer">Aluno(s) (Separe com " / ")</label>
                                <div className="relative">
                                    <Users className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input 
                                        id="mp-alunos"
                                        type="text" 
                                        value={students} 
                                        onChange={(e) => setStudents(e.target.value)} 
                                        className="w-full h-10 sm:h-12 md:h-14 pl-9 sm:pl-12 pr-3 sm:pr-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-brand/20 rounded-md text-xs sm:text-sm font-bold text-slate-700 dark:text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all uppercase placeholder-slate-400" 
                                        placeholder="Ex: Nick1 / Nick2 / Nick3" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 sm:mt-4 pt-4 sm:pt-6 border-t border-slate-200 dark:border-brand/20 flex justify-end gap-4 transition-colors">
                            <button 
                                onClick={handleSend} 
                                disabled={isSending || !students.trim() || !materialType || isLoadingTemplates} 
                                className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 bg-brand hover:bg-brand-hover text-white font-condensed font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm transition-all flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-not-allowed"
                            >
                                {isSending ? (
                                    <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                        <Loader2 size={16} className="animate-spin sm:w-5 sm:h-5" />
                                        <span className="truncate">{sendProgress || 'A enviar...'}</span>
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                                        <SendHorizontal size={16} className="sm:w-5 sm:h-5" />
                                        <span>Enviar MP(s)</span>
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        const App = () => {
            const { searchParams, updateParams } = useQueryParams();
            const currentView = searchParams.get('pag') || 'formulario';

            const [currentUser, setCurrentUser] = useState(() => {
                const cached = localStorage.getItem('cfo_auth_user');
                return cached ? JSON.parse(cached) : { nickname: '', role: '' };
            });
            const [authStatus, setAuthStatus] = useState(() => {
                return localStorage.getItem('cfo_auth_status') === 'authorized' ? 'authorized' : 'loading';
            });
            const [reportData, setReportData] = useState(null);
            const [toasts, setToasts] = useState([]);
            const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

            useEffect(() => {
                const root = document.documentElement;
                if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
                localStorage.setItem('theme', theme);
            }, [theme]);

            const addToast = (type, title, message) => {
                const id = Math.random().toString(36).substr(2, 9);
                setToasts(prev => [...prev, { id, type, title, message }]);
                setTimeout(() => removeToast(id), 5000);
            };

            const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));

            useEffect(() => {
                const authenticate = async () => {
                    const forumNick = await getForumUsername();
                    let baseNick = forumNick;
                    if (!baseNick) {
                        const cachedUser = localStorage.getItem('cfo_auth_user');
                        if (cachedUser) baseNick = JSON.parse(cachedUser).nickname;
                    }
                    const nickToSearch = baseNick ? baseNick.toLowerCase().trim() : "convidado";

                    try {
                        const response = await fetch(MACRO_AUTH_URL);
                        if (!response.ok) throw new Error('Falha ao buscar autorizações');
                        const text = await response.text();
                        
                        const data = parseTSVGlobal(text);
                        
                        let foundRole = null;
                        let foundNick = baseNick || "Desconhecido";

                        for (let i = 0; i < data.length; i++) {
                            const row = data[i];
                            if (row[1] && row[1].toString().trim().toLowerCase() === nickToSearch) {
                                foundRole = row[0] ? row[0].toString().trim() : 'Membro';
                                foundNick = row[1].toString().trim();
                                break;
                            }
                            if (row[3] && row[3].toString().trim().toLowerCase() === nickToSearch) {
                                foundRole = row[2] ? row[2].toString().trim() : 'Membro';
                                foundNick = row[3].toString().trim();
                                break;
                            }
                        }

                        if (foundRole) {
                            const userObj = { nickname: foundNick, role: foundRole };
                            setCurrentUser(userObj);
                            setAuthStatus('authorized');
                            
                            localStorage.setItem('cfo_auth_user', JSON.stringify(userObj));
                            localStorage.setItem('cfo_auth_status', 'authorized');
                        } else {
                            setCurrentUser({ nickname: baseNick || 'Desconhecido', role: 'Sem Autorização' });
                            setAuthStatus('unauthorized');
                            localStorage.removeItem('cfo_auth_user');
                            localStorage.removeItem('cfo_auth_status');
                        }

                    } catch (error) {
                        console.error("Erro na Autenticação:", error);
                        if (localStorage.getItem('cfo_auth_status') !== 'authorized') {
                            setCurrentUser({ nickname: baseNick || 'Desconhecido', role: 'Sem Autorização' });
                            setAuthStatus('error');
                        }
                    }
                };
                authenticate();
            }, []);

            const handleNavigateFromCorrection = (data) => {
                setReportData({
                    classId: 'admin_activity',
                    startTime: new Date(),
                    studentNick: data.nick,
                    verdict: data.approved ? 'Aprovado' : 'Reprovado',
                    score: data.approved ? 'Sim' : 'Não',
                    comments: data.comments
                });
                updateParams({ pag: 'formulario', aula: 'admin' });
            };

            const handleTabClick = (e, id) => {
                e.preventDefault();
                if (authStatus !== 'authorized') return;
                // Ao trocar a TAB principal, limpa os sub-parâmetros (aula e tipo)
                updateParams({ pag: id, aula: null, tipo: null });
            };

            const isBlocked = authStatus !== 'authorized';

            return (
                <div className="flex flex-col min-h-screen w-full font-sans text-slate-800 dark:text-slate-200 pb-10 transition-colors">
                    <ToastContainer toasts={toasts} removeToast={removeToast} />

                    <div className="flex-1 w-full max-w-5xl mx-auto p-2 sm:p-4 md:p-8 mt-2 md:mt-6">
                        <div className="bg-white dark:bg-[#121813] rounded-lg border border-slate-200 dark:border-brand/50 border-t-4 border-t-brand p-4 sm:p-6 md:p-10 relative overflow-hidden transition-colors">
                            
                            <div className="flex flex-col gap-4 sm:gap-6 mb-6 md:mb-10 border-b border-slate-100 dark:border-brand/20 pb-6 relative z-10 transition-colors w-full">
                                
                                <div className="flex flex-row items-center justify-between w-full">
                                    <div className="shrink-0">
                                        <BrandHeader />
                                    </div>
                                    
                                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                                        <button 
                                            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} 
                                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-black/20 text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand-light transition-colors border border-slate-200 dark:border-brand/20 shrink-0" 
                                            title="Alternar Tema"
                                        >
                                            {theme === 'light' ? <Moon size={14} className="sm:w-5 sm:h-5" /> : <Sun size={14} className="sm:w-5 sm:h-5" />}
                                        </button>
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="text-right hidden md:flex flex-col items-end">
                                                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white font-condensed uppercase leading-tight transition-colors">{currentUser.nickname}</p>
                                                <p className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest leading-tight ${isBlocked ? 'text-red-500' : 'text-brand'}`}>{currentUser.role}</p>
                                            </div>
                                            <div className={`w-8 h-8 sm:w-11 sm:h-11 shrink-0 bg-slate-100 dark:bg-black/20 rounded-full border transition-colors overflow-hidden flex items-center justify-center ${isBlocked ? 'border-red-500/50' : 'border-slate-200 dark:border-brand/20'}`}>
                                                {currentUser.nickname && currentUser.nickname !== 'Desconhecido' ? (
                                                    <img src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${currentUser.nickname}&direction=3&head_direction=3&gesture=sml&size=m&headonly=1`} className={`object-none scale-110 sm:scale-100 ${isBlocked ? 'grayscale' : ''}`} onError={(e) => e.target.style.display = 'none'} />
                                                ) : (
                                                    <Users size={16} className="text-slate-400" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-full mt-4 sm:mt-8 border-b-2 border-slate-100 dark:border-white/5">
                                    <div className="max-w-4xl mx-auto flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-8 px-2 sm:px-0">
                                        {[
                                            { id: 'formulario', label: 'Formulário', iconImg: 'https://i.imgur.com/glet2Pt.png' },
                                            { id: 'correcao', label: 'Correção', iconImg: 'https://i.imgur.com/Ru1cipy.png' },
                                            { id: 'retificacoes', label: 'Retificações', iconImg: 'https://i.imgur.com/iVydgE6.png' },
                                            { id: 'mps', label: 'MPs', iconImg: 'https://i.imgur.com/sYgWq8k.png' }
                                        ].map(item => {
                                            const isActive = currentView === item.id && !isBlocked;
                                            return (
                                                <a
                                                    key={item.id}
                                                    href={`?pag=${item.id}`}
                                                    onClick={(e) => handleTabClick(e, item.id)}
                                                    className={`group relative flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-colors
                                                        ${isBlocked ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''}
                                                        ${isActive
                                                            ? 'text-slate-900 dark:text-white'
                                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                                        }
                                                    `}
                                                >
                                                    <img 
                                                        src={item.iconImg} 
                                                        alt={item.label}
                                                        className={`w-5 h-5 sm:w-6 sm:h-6 object-contain transition-all duration-300 ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100'}`}
                                                        style={{ imageRendering: 'pixelated' }}
                                                    />
                                                    <span className="truncate">{item.label}</span>
                                                    
                                                    {isActive && (
                                                        <span className="absolute bottom-[-2px] left-0 w-full h-1 bg-brand dark:bg-brand rounded-t-md"></span>
                                                    )}
                                                    
                                                    {!isActive && !isBlocked && (
                                                        <span className="absolute bottom-[-2px] left-0 w-full h-1 bg-slate-200 dark:bg-white/10 rounded-t-md scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                                    )}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 min-h-[300px] flex flex-col justify-center">
                                {authStatus === 'loading' && (
                                    <div className="py-20 flex flex-col items-center justify-center text-slate-400">
                                        <Loader2 size={40} className="animate-spin mb-4" />
                                        <p className="text-sm font-bold uppercase tracking-widest">A verificar permissões...</p>
                                    </div>
                                )}
                                
                                {authStatus === 'unauthorized' && (
                                    <div className="py-20 flex flex-col items-center justify-center text-center px-4 bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg animate-fade-in">
                                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 text-red-500 shadow-inner">
                                            <Lock size={32} />
                                        </div>
                                        <h4 className="text-lg font-bold text-red-600 dark:text-red-400 uppercase tracking-wide mb-2">Acesso Negado</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
                                            Você não tem permissões suficientes para acessar o CFO Post.
                                        </p>
                                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 uppercase font-bold tracking-widest">
                                            Entre em contato com um estagiário+ para obter acesso.
                                        </p>
                                    </div>
                                )}

                                {authStatus === 'error' && (
                                    <div className="py-20 flex flex-col items-center justify-center text-center px-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-lg animate-fade-in">
                                        <AlertTriangle size={40} className="text-orange-500 mb-4" />
                                        <h4 className="text-lg font-bold text-slate-700 dark:text-white uppercase tracking-wide mb-2">Erro de Ligação</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md leading-relaxed">
                                            Não foi possível validar as tuas permissões de acesso com a base de dados. Por favor, tenta atualizar a página ou volta mais tarde.
                                        </p>
                                    </div>
                                )}

                                {authStatus === 'authorized' && currentView === 'formulario' && (
                                    <ClassFeedbackForm
                                        professor={currentUser}
                                        searchParams={searchParams}
                                        updateParams={updateParams}
                                        initialClassId={reportData?.classId}
                                        initialStartTime={reportData?.startTime}
                                        initialStudent={reportData?.studentNick}
                                        initialVerdict={reportData?.verdict}
                                        initialScore={reportData?.score}
                                        initialComments={reportData?.comments}
                                        addToast={addToast}
                                    />
                                )}

                                {authStatus === 'authorized' && currentView === 'correcao' && (
                                    <CorrectionTool
                                        currentUser={currentUser}
                                        onNavigateToReport={handleNavigateFromCorrection}
                                        addToast={addToast}
                                    />
                                )}

                                {authStatus === 'authorized' && currentView === 'retificacoes' && (
                                    <RectificationForm
                                        professor={currentUser}
                                        searchParams={searchParams}
                                        updateParams={updateParams}
                                        addToast={addToast}
                                    />
                                )}

                                {authStatus === 'authorized' && currentView === 'mps' && (
                                    <MpSenderForm
                                        professor={currentUser}
                                        searchParams={searchParams}
                                        updateParams={updateParams}
                                        addToast={addToast}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<App />);