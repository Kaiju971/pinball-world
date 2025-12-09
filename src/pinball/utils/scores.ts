// src/utils/scores.ts
export type ScoreEntry = {
  initials: string; // 3 letters
  score: number;
};

export type ScoreBoard = Record<string, ScoreEntry[]>;

const STORAGE_KEY = "PINBALL_SCORES";
const TOP_N = 4;

/** Normalize legacy format (array of initials strings) to ScoreEntry[] */
function normalizePlayers(raw: any): ScoreEntry[] {
  if (!raw) return [];
  if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "string") {
    // legacy: ["AAA","BOB"...] => convert to score 0
    return raw.slice(0, TOP_N).map((s: string) => ({ initials: s, score: 0 }));
  }
  if (Array.isArray(raw) && typeof raw[0] === "object") {
    return raw as ScoreEntry[];
  }
  return [];
}

export function getScores(defaults: ScoreBoard = {}): ScoreBoard {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaults;
  try {
    const parsed = JSON.parse(stored);
    const board: ScoreBoard = {};
    for (const [table, players] of Object.entries(parsed)) {
      board[table] = normalizePlayers(players).slice(0, TOP_N);
    }
    return board;
  } catch {
    return defaults;
  }
}

/** Persist a full board */
export function setScores(board: ScoreBoard) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
  // notify listeners (HiScore page)
  window.dispatchEvent(new CustomEvent("pinball:scores-updated"));
}

/** Save a score for tableName. Keeps top TOP_N sorted desc */
export function saveScore(tableName: string, initials: string, score: number) {
  const board = getScores({});
  const list = board[tableName] ? [...board[tableName]] : [];
  list.push({ initials: initials.slice(0, 3).toUpperCase(), score });
  // sort desc and keep top N
  list.sort((a, b) => b.score - a.score);
  board[tableName] = list.slice(0, TOP_N);
  setScores(board);
}

/** Reset to given defaults or empty */
export function resetScores(defaultBoard: ScoreBoard = {}) {
  setScores(defaultBoard);
}
