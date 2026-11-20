/* Folegando · telas ilustrativas do app, fiéis ao visual atual (D116, tema escuro).
   Uso: <div data-tela="hoje"></div> vira um celular com a tela; <div data-tela="admin"></div> vira o site de admin.
   Nomes e números são de exemplo. */
(function () {
  var ANEL = '<svg viewBox="18 18 72 72" aria-hidden="true"><g transform="translate(54 54) scale(1.05) translate(-54 -54)"><path d="M75.92 55.92 A22 22 0 1 1 52.08 32.08" fill="none" stroke="#9FE7DC" stroke-width="10" stroke-linecap="round"/><circle cx="69.56" cy="38.44" r="7" fill="#FF5A36"/></g></svg>';
  window.FOLEGANDO_ANEL = ANEL;

  var status = '<div class="status"><span>7:42</span><span>●●● 87%</span></div>';
  function abas(on) {
    var it = [['hoje', 'ϟ', 'Hoje'], ['treinar', '⇆', 'Treinar'], ['turma', '◉◉', 'Turma'], ['voce', '◯', 'Você']];
    return '<div class="abas">' + it.map(function (a) { return '<span class="' + (a[0] === on ? 'on' : '') + '"><b>' + a[1] + '</b>' + a[2] + '</span>'; }).join('') + '</div>';
  }
  function av(ini, cor) { return '<span class="av" style="background:' + cor + '">' + ini + '</span>'; }
  function fone(corpo, extra) { return '<div class="fone"><div class="tela">' + status + corpo + (extra || '') + '</div></div>'; }

  var T = {};

  T.hoje = function () {
    return fone(
      '<div class="corpo"><h3>Hoje</h3>' +
        '<div class="heroi"><div class="rot">Fôlego</div><div style="display:flex;align-items:baseline;gap:8px"><span class="grande">7</span><span class="unid">semanas</span></div>' +
        '<div class="mini" style="color:var(--t2)">Semana de descanso em 2 semanas fechadas.</div>' +
        '<div class="barras"><i class="f"></i><i class="f"></i><i class="f"></i><i></i></div>' +
        '<div style="display:flex;justify-content:space-between;align-items:baseline"><span class="mini" style="color:var(--t2);font-size:12px">Meta da semana · falta 1 dia</span><span class="num">3<span style="color:var(--t3)">/4</span></span></div></div>' +
        '<div class="rot" style="margin:2px">Sua semana</div>' +
        '<div class="cart tres"><div><div class="num">2h48</div><div class="mini">tempo</div></div><div><div class="num">38</div><div class="mini">séries</div></div><div><div class="num">9.320</div><div class="mini">kg volume</div></div></div>' +
        '<div class="rot" style="margin:2px">Treinos do dia da turma</div>' +
        '<div class="cart" style="box-shadow:inset 4px 0 0 var(--circ)"><div style="display:flex;justify-content:space-between"><b style="font:800 16px var(--display);text-transform:uppercase">AMRAP de quinta</b><span class="mini" style="color:var(--verde);font-weight:700">feito ✓</span></div><div class="mini" style="color:var(--t2)">AMRAP 20 min · Estúdio Força · 12 fizeram</div></div>' +
        '</div>',
      '<div class="botao-app">Treinar</div>' + abas('hoje')
    );
  };

  T.turma = function () {
    var linhas = [
      ['AN', '#9FE7DC', 'Ana', '5 dias'],
      ['BR', '#FF6FB5', 'Bruno', '4 dias'],
      ['CA', '#F5B83D', 'Carla', '4 dias'],
    ];
    return fone(
      '<div class="corpo"><h3>Turma</h3>' +
        '<div style="display:flex;gap:6px"><span class="chip-app" style="background:#fff;color:#000">Todas</span><span class="chip-app">Estúdio Força</span><span class="chip-app">Corrida</span></div>' +
        '<div class="cart"><div style="display:flex;justify-content:space-between"><span class="rot">Ranking da semana · Estúdio Força</span><span class="mini">ver tudo ›</span></div>' +
        linhas.map(function (l, i) { return '<div class="linha-feed" style="padding:5px 0;border-top:' + (i ? '1px solid var(--linha)' : '0') + '"><b class="num" style="font-size:15px;width:14px;color:var(--t2)">' + (i + 1) + '</b>' + av(l[0], l[1]) + '<span style="flex:1;font-size:13px">' + l[2] + '</span><b class="num" style="font-size:15px">' + l[3] + '</b></div>'; }).join('') +
        '</div>' +
        '<div class="cart" style="box-shadow:inset 4px 0 0 var(--cardio)"><div class="linha-feed">' + av('BR', '#FF6FB5') + '<b style="flex:1;font-size:13px">Bruno</b><span class="mini">hoje · 6:58</span></div><div style="font:700 12px var(--corpo);color:var(--cardio);margin-top:4px">Corrida · 8,2 km</div><div class="tres" style="text-align:left;margin-top:5px"><div><div class="num" style="font-size:19px">8,2</div><div class="mini">km</div></div><div><div class="num" style="font-size:19px">41:15</div><div class="mini">tempo</div></div><div><div class="num" style="font-size:19px">5:02</div><div class="mini">pace</div></div></div><div class="mini" style="margin-top:6px;color:var(--t2)">🔥 4 · 👏 3 · 💬 2</div></div>' +
        '<div class="cart" style="box-shadow:inset 4px 0 0 var(--luta)"><div class="linha-feed">' + av('DI', '#C08BFF') + '<b style="flex:1;font-size:13px">Diego</b><span class="mini">ontem · 19:30</span></div><div style="font:700 12px var(--corpo);color:var(--luta);margin-top:4px">Muay Thai · 6 rounds</div></div>' +
        '</div>',
      abas('turma')
    );
  };

  T.treino = function () {
    function serie(n, kg, r, feito) { return '<div style="display:flex;gap:6px;align-items:center"><b class="num" style="font-size:14px;width:12px;color:var(--t3)">' + n + '</b><div class="campo-app">' + kg + '</div><div class="campo-app">' + r + '</div><div class="check-app ' + (feito ? '' : 'vazio') + '">✓</div></div>'; }
    return fone(
      '<div class="corpo"><div class="sobre">Musculação · Treino do dia</div><h3 style="font-size:34px">28:14</h3>' +
        '<div class="cart" style="display:flex;flex-direction:column;gap:7px">' +
        '<div style="display:flex;gap:10px;align-items:center"><div style="width:62px;height:46px;border-radius:10px;background:linear-gradient(135deg,#2c2c2e,#3a3a3c);display:grid;place-items:center;font-size:20px">🏋️</div><div><b style="font:800 17px/1.05 var(--display);text-transform:uppercase">A1 · Supino reto</b><div class="mini">Peito · barra</div></div></div>' +
        '<div style="font:700 11px var(--corpo);color:var(--ar)">prescrito · 12-10-8 reps · 70% · ~56 kg</div>' +
        '<div class="mini" style="color:var(--t2)">“desça em 3 segundos”</div>' +
        '<div style="display:flex;gap:6px;padding-left:18px" class="mini"><span style="flex:1;text-align:center">kg</span><span style="flex:1;text-align:center">reps</span><span style="width:30px"></span></div>' +
        serie(1, '55', '12', true) + serie(2, '57,5', '10', true) + serie(3, '–', '–', false) +
        '</div>' +
        '<div class="cart" style="background:#fff;color:#000;display:flex;justify-content:space-between;align-items:center;padding:9px 12px"><b style="font:700 12px var(--corpo)">Descanso</b><b style="font:900 22px var(--display)">1:12</b></div>' +
        '<div class="cart" style="display:flex;gap:10px;align-items:center;opacity:.8"><b style="font:800 16px var(--display);text-transform:uppercase;flex:1">A2 · Remada curvada</b><span class="mini">bi-set</span></div>' +
        '</div>',
      '<div class="botao-app" style="opacity:.9">Tá pago!</div>'
    );
  };

  T.rounds = function () {
    return fone(
      '<div class="corpo" style="align-items:stretch"><div class="sobre">Muay Thai · Saco</div><h3>Round 3 de 6</h3>' +
        '<div class="cart" style="border:2px solid var(--luta);text-align:center;padding:24px 10px;margin-top:6px"><div style="font:900 96px/.9 var(--display)">2:47</div><div class="mini" style="color:var(--luta);font-weight:700;font-size:12px;margin-top:6px">ROUND · 3 min</div></div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' + ['Saco', 'Manopla', 'Sparring', 'Técnica', 'Sombra'].map(function (t, i) { return '<span class="chip-app" style="' + (i === 0 ? 'background:#fff;color:#000' : '') + '">' + t + '</span>'; }).join('') + '</div>' +
        '<div class="mini" style="text-align:center;color:var(--t2);margin-top:4px">bipe aos 10 s e 3-2-1 · descanso 1 min</div>' +
        '<div style="display:flex;gap:8px;margin-top:6px"><div class="botao-app" style="flex:1;margin:0;background:rgba(255,255,255,.12);font-size:18px">Pausar</div><div class="botao-app" style="flex:1;margin:0;font-size:18px">Encerrar</div></div>' +
        '</div>'
    );
  };

  T.analise = function () {
    // radar de 6 regiões (D84): semana preenchida sobre a média tracejada
    var reg = ['Peito', 'Costas', 'Ombros', 'Braços', 'Pernas', 'Core'];
    var sem = [0.8, 0.9, 0.55, 0.7, 0.95, 0.4];
    var med = [0.6, 0.7, 0.6, 0.5, 0.7, 0.5];
    function pts(v) { return v.map(function (x, i) { var a = -Math.PI / 2 + (i * Math.PI) / 3; return (100 + Math.cos(a) * 78 * x).toFixed(1) + ',' + (100 + Math.sin(a) * 78 * x).toFixed(1); }).join(' '); }
    var aneis = [0.33, 0.66, 1].map(function (k) { return '<polygon points="' + pts([k, k, k, k, k, k]) + '" fill="none" stroke="#38383a" stroke-width="1"/>'; }).join('');
    var rot = reg.map(function (r, i) { var a = -Math.PI / 2 + (i * Math.PI) / 3; return '<text x="' + (100 + Math.cos(a) * 94).toFixed(0) + '" y="' + (104 + Math.sin(a) * 94).toFixed(0) + '" fill="#aeaeb2" font-size="10" font-family="Barlow" text-anchor="middle">' + r + '</text>'; }).join('');
    var radar = '<svg viewBox="0 0 200 200" width="100%">' + aneis + '<polygon points="' + pts(med) + '" fill="none" stroke="#aeaeb2" stroke-dasharray="4 3" stroke-width="1.5"/><polygon points="' + pts(sem) + '" fill="rgba(159,231,220,.28)" stroke="#9FE7DC" stroke-width="2.5"/>' + rot + '</svg>';
    return fone(
      '<div class="corpo"><div class="sobre">Você</div><h3>Análise</h3>' +
        '<div style="display:flex;gap:6px"><span class="chip-app">Semana</span><span class="chip-app" style="background:#fff;color:#000">Músculos</span><span class="chip-app">Evolução</span></div>' +
        '<div class="cart" style="padding:6px">' + radar + '</div>' +
        '<div class="cart"><div class="rot">Séries por grupo · semana</div>' +
        [['Pernas', 14, 10], ['Costas', 12, 9], ['Peito', 10, 8], ['Core', 4, 6]].map(function (g) { return '<div style="display:flex;align-items:center;gap:8px;margin-top:6px"><span class="mini" style="width:46px;color:var(--t2)">' + g[0] + '</span><div style="flex:1;height:8px;border-radius:4px;background:var(--linha);position:relative"><div style="position:absolute;inset:0 auto 0 0;width:' + g[1] * 6 + '%;background:var(--ar);border-radius:4px"></div><div style="position:absolute;top:-3px;bottom:-3px;left:' + g[2] * 6 + '%;width:2px;background:#fff"></div></div><b class="num" style="font-size:14px">' + g[1] + '</b></div>'; }).join('') +
        '<div class="mini" style="margin-top:8px;color:var(--brasa2)">Core abaixo da sua média há 3 semanas.</div></div>' +
        '</div>',
      abas('voce')
    );
  };

  T.tapago = function () {
    return fone(
      '<div class="corpo" style="align-items:center;justify-content:center;text-align:center;gap:14px">' +
        '<span class="carimbo">Tá pago!</span>' +
        '<span class="chip-app" style="background:rgba(245,184,61,.15);color:var(--cardio);font-weight:700">Corrida · 10 km</span>' +
        '<div class="tres" style="width:100%"><div><div class="num" style="font-size:30px">10</div><div class="mini">km</div></div><div><div class="num" style="font-size:30px">52:40</div><div class="mini">tempo</div></div><div><div class="num" style="font-size:30px">5:16</div><div class="mini">pace</div></div></div>' +
        '<div class="cart" style="width:100%;background:rgba(159,231,220,.12);text-align:left"><div class="rot" style="color:var(--ar);font-weight:700">Recorde</div><div class="num" style="font-size:18px">Melhor pace em 10 km</div></div>' +
        '<div class="cart" style="width:100%;text-align:left;display:flex;gap:10px;align-items:center"><div style="width:34px;height:34px;border-radius:50%;background:var(--ar);display:grid;place-items:center;color:#000;font-weight:900">✓</div><div><div class="rot">Nova conquista</div><b style="font-size:13px">Fôlego de 4</b></div></div>' +
        '</div>',
      '<div style="display:flex;gap:8px;margin:8px 14px 14px"><div class="botao-app" style="flex:1;margin:0;background:rgba(255,255,255,.12);font-size:16px">Foto</div><div class="botao-app" style="flex:1;margin:0;font-size:16px">Compartilhar</div></div>'
    );
  };

  T.dia = function () {
    var r = [['1', 'AN', '#9FE7DC', 'Ana', '7 + 12'], ['2', 'CA', '#F5B83D', 'Carla', '7 + 3'], ['3', 'BR', '#FF6FB5', 'Bruno', '6 + 18'], ['4', 'DI', '#C08BFF', 'Diego', '6 + 9']];
    return fone(
      '<div class="corpo"><div class="sobre">Treino do dia · Estúdio Força</div><h3>AMRAP de quinta</h3>' +
        '<div class="cart"><div style="font:700 12px var(--corpo);color:var(--circ)">AMRAP 20 min</div><div class="mini" style="color:var(--t2);margin-top:4px;line-height:1.6">10 burpees<br>15 kettlebell swing · 16 kg<br>20 agachamentos com salto<br>200 m corrida</div></div>' +
        '<div class="cart"><div class="rot">Ranking · como prescrito</div>' +
        r.map(function (l, i) { return '<div class="linha-feed" style="padding:6px 0;border-top:' + (i ? '1px solid var(--linha)' : '0') + '"><b class="num" style="font-size:15px;width:14px;color:var(--t2)">' + l[0] + '</b>' + av(l[1], l[2]) + '<span style="flex:1;font-size:13px">' + l[3] + '</span><b class="num" style="font-size:16px">' + l[4] + '</b></div>'; }).join('') +
        '<div class="mini" style="margin-top:6px">rounds + reps · 3 adaptaram</div></div>' +
        '</div>',
      '<div class="botao-app">Começar</div>'
    );
  };

  T.admin = function () {
    var lin = function (a, b, c, d) { return '<div class="lin"><b style="width:14px;color:var(--t3)">' + a + '</b><span style="flex:1;color:#fff">' + b + '</span><span>' + c + '</span><b style="font:800 14px var(--display);color:#fff;width:48px;text-align:right">' + d + '</b></div>'; };
    return '<div class="navegador"><div class="barra"><i></i><i></i><i></i><span>admin.folegando.com.br</span></div><div class="admin">' +
      '<div class="lado"><div class="lockup" style="font-size:19px;margin-bottom:10px">' + ANEL + '<span class="wordmark">folegando<span class="ponto">.</span></span></div>' +
      '<div class="it">Modelos de treino</div><div class="it">Biblioteca</div><div class="it">Atividades</div><div class="it">Interessados</div>' +
      '<div class="mini" style="margin-top:10px">Comunidades</div><div class="it on">Estúdio Força</div><div class="it">Corrida de domingo</div><div class="it">Turma da manhã</div></div>' +
      '<div class="meio"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font:800 22px var(--display);text-transform:uppercase">Estúdio Força</b><span style="display:flex;gap:4px"><span class="chip-app" style="background:#fff;color:#000">Visão geral</span><span class="chip-app">Métricas</span><span class="chip-app">Critério</span></span></div>' +
      '<div class="ind"><div><div class="mini">Membros</div><div class="v">28</div></div><div><div class="mini">Ativos na semana</div><div class="v">21</div><div class="mini">passada: 18</div></div><div><div class="mini">Treinos na semana</div><div class="v">74</div></div><div><div class="mini">Reação em 24 h</div><div class="v">82%</div></div></div>' +
      '<div style="display:flex;gap:10px"><div class="bloco" style="flex:1"><b style="font:700 12px var(--corpo)">Ranking · pontos por atividade</b>' + lin(1, 'Ana', '312 min', '389') + lin(2, 'Carla', '276 min', '341') + lin(3, 'Bruno', '298 min', '322') + '</div>' +
      '<div class="bloco" style="flex:1.3"><div style="display:flex;justify-content:space-between"><b style="font:700 12px var(--corpo)">Treinos do dia</b><span class="chip-app">Criar treino do dia</span></div>' + lin('', 'AMRAP de quinta', 'hoje', '12 ✓') + lin('', 'Força · Superiores A', 'ontem', '9 ✓') + lin('', 'EMOM 16 min', 'seg', '15 ✓') + '</div></div>' +
      '</div></div></div>';
  };

  /* ---------- turma de convivência (página /turma, D237): trabalho, prédio, amigos ---------- */
  function topoTurma(on, nome) {
    var it = ['Pessoas', 'Treinos', 'Ranking', 'Desafios'];
    return '<h3>Turma</h3>' +
      '<div style="display:flex;gap:6px"><span class="chip-app" style="background:#fff;color:#000">' + (nome || 'Turma do 3º andar') + ' ▾</span><span class="chip-app">Esta semana</span></div>' +
      '<div style="display:flex;background:var(--grafite);border-radius:999px;padding:3px">' + it.map(function (a) { return '<span style="flex:1;text-align:center;padding:5px 0;border-radius:999px;font:700 10.5px var(--corpo);' + (a === on ? 'background:var(--grafite2);color:#fff' : 'color:var(--t3)') + '">' + a + '</span>'; }).join('') + '</div>';
  }
  function chamar(rot) { return '<span style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,90,54,.5);background:rgba(255,90,54,.12);color:var(--brasa2);font:700 10.5px var(--corpo)">' + (rot || '👊 Chamar') + '</span>'; }

  T.pessoas = function () {
    var foram = [['PA', '#9FE7DC', 'Paula', 'Caminhada · 45 min'], ['RA', '#6EA8FF', 'Rafa', 'Academia · 1h05'], ['JO', '#B4E074', 'Jô', 'Yoga · 30 min']];
    var faltam = [['TI', '#F5B83D', 'Tiago', 'último treino há 3 dias', ''], ['LU', '#FF6FB5', 'Lu', 'último treino há 5 dias', '✓ Você chamou'], ['MA', '#C08BFF', 'Marcos', 'último treino há 8 dias', '']];
    return fone(
      '<div class="corpo">' + topoTurma('Pessoas') +
        '<div class="cart"><div class="rot">Ainda não treinaram nesta semana · 3</div>' +
        faltam.map(function (l, i) { return '<div class="linha-feed" style="padding:7px 0;border-top:' + (i ? '1px solid var(--linha)' : '0') + '">' + av(l[0], l[1]) + '<div style="flex:1;min-width:0"><b style="font-size:13px">' + l[2] + '</b><div class="mini">' + l[3] + '</div></div>' + (l[4] ? '<span class="mini" style="color:var(--t2);font-weight:700">' + l[4] + '</span>' : chamar()) + '</div>'; }).join('') +
        '</div>' +
        '<div class="cart"><div class="rot">Treinaram · 9 de 12</div>' +
        foram.map(function (l, i) { return '<div class="linha-feed" style="padding:6px 0;border-top:' + (i ? '1px solid var(--linha)' : '0') + '">' + av(l[0], l[1]) + '<div style="flex:1"><b style="font-size:13px">' + l[2] + '</b><div class="mini">' + l[3] + '</div></div><span style="color:var(--verde);font-weight:900">✓</span></div>'; }).join('') +
        '</div>' +
        '</div>',
      abas('turma')
    );
  };

  T.feedgrupo = function () {
    function post(ini, c, nome, quando, cor, esporte, dados, reac) {
      return '<div class="cart" style="box-shadow:inset 4px 0 0 ' + cor + '"><div class="linha-feed">' + av(ini, c) + '<b style="flex:1;font-size:13px">' + nome + '</b><span class="mini">' + quando + '</span></div>' +
        '<div style="font:700 12px var(--corpo);color:' + cor + ';margin-top:4px">' + esporte + '</div>' + (dados || '') +
        '<div class="mini" style="margin-top:6px;color:var(--t2)">' + reac + '</div></div>';
    }
    return fone(
      '<div class="corpo">' + topoTurma('Treinos') +
        post('PA', '#9FE7DC', 'Paula', 'hoje · 7:10', 'var(--cardio)', 'Caminhada · 5,1 km', '<div class="tres" style="text-align:left;margin-top:5px"><div><div class="num" style="font-size:19px">5,1</div><div class="mini">km</div></div><div><div class="num" style="font-size:19px">45:20</div><div class="mini">tempo</div></div><div><div class="num" style="font-size:19px">✓ 3/3</div><div class="mini">meta</div></div></div>', '🔥 6 · 👏 4 · 💬 “foi antes do expediente!”') +
        post('RA', '#6EA8FF', 'Rafa', 'ontem · 18:40', 'var(--musc)', 'Academia · pernas · 1h05', '', '💪 5 · 🔥 2') +
        post('JO', '#B4E074', 'Jô', 'ontem · 12:15', 'var(--mente)', 'Yoga · 30 min', '<div class="mini" style="margin-top:4px;color:var(--t2)">“no intervalo do almoço”</div>', '👏 7') +
        '</div>',
      abas('turma')
    );
  };

  T.rankinggrupo = function () {
    var r = [['1', 'PA', '#9FE7DC', 'Paula', '4 dias'], ['2', 'RA', '#6EA8FF', 'Rafa', '4 dias'], ['3', 'JO', '#B4E074', 'Jô', '3 dias'], ['4', 'AN', '#F5B83D', 'André', '2 dias'], ['5', 'LU', '#FF6FB5', 'Lu', '1 dia']];
    return fone(
      '<div class="corpo">' + topoTurma('Ranking') +
        '<div class="cart"><div class="rot">Dias com treino</div><div class="mini" style="color:var(--t2);margin-top:3px">Quantos dias cada um treinou na semana. Qualquer treino de 10 min ou mais conta. Premia constância.</div></div>' +
        '<div class="cart">' + r.map(function (l, i) { return '<div class="linha-feed" style="padding:6px 0;border-top:' + (i ? '1px solid var(--linha)' : '0') + '"><b class="num" style="font-size:15px;width:14px;color:var(--t2)">' + l[0] + '</b>' + av(l[1], l[2]) + '<span style="flex:1;font-size:13px">' + l[3] + '</span><b class="num" style="font-size:15px">' + l[4] + '</b></div>'; }).join('') + '</div>' +
        '</div>',
      abas('turma')
    );
  };

  T.desafio = function () {
    var quem = [['PA', '#9FE7DC', 'Paula', '96 km'], ['TI', '#F5B83D', 'Tiago', '88 km'], ['RA', '#6EA8FF', 'Rafa', '74 km']];
    return fone(
      '<div class="corpo"><div class="sobre">Desafio da turma · coletivo</div><h3 style="font-size:28px">1.000 km até o Natal</h3>' +
        '<div class="heroi"><div class="rot">A turma já fez</div><div style="display:flex;align-items:baseline;gap:6px"><span class="grande" style="font-size:62px">684</span><span class="unid">de 1.000 km</span></div>' +
        '<div style="height:10px;border-radius:5px;background:var(--linha);margin:10px 0 6px;overflow:hidden"><div style="width:68.4%;height:100%;background:var(--ar);border-radius:5px"></div></div>' +
        '<div class="mini" style="color:var(--t2)">Faltam 316 km · 36 dias · 11 de 12 participando</div></div>' +
        '<div class="cart"><div class="rot">Quem mais somou</div>' +
        quem.map(function (l, i) { return '<div class="linha-feed" style="padding:6px 0;border-top:' + (i ? '1px solid var(--linha)' : '0') + '">' + av(l[0], l[1]) + '<span style="flex:1;font-size:13px">' + l[2] + '</span><b class="num" style="font-size:15px">' + l[3] + '</b></div>'; }).join('') + '</div>' +
        '<div class="cart" style="display:flex;gap:10px;align-items:center"><div style="font-size:20px">🎁</div><div><div class="rot">Prêmio</div><b style="font-size:12.5px">Café da manhã da turma no fim do ano</b></div></div>' +
        '</div>',
      abas('turma')
    );
  };

  window.FOLEGANDO_TELAS = T;
  function montar() {
    document.querySelectorAll('[data-tela]').forEach(function (el) {
      var f = T[el.getAttribute('data-tela')];
      if (f) el.innerHTML = f();
    });
    document.querySelectorAll('[data-anel]').forEach(function (el) { el.innerHTML = ANEL; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar);
  else montar();
})();
