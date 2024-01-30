import { TextField } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";

export function Tag() {
    const [tags, setTags] = useState([]);
    const [isInputFocused, setIsInputFocused] = useState(false);

    function handleKeyDown(e) {
        if (e.key !== 'Enter') return;
        const value = e.target.value.trim();
        if (!value || tags.length >= 2) return;

        setTags([...tags, value]);
        e.target.value = '';
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index));
    }

    function handleInputFocus() {
        setIsInputFocused(true);
    }

    function handleInputBlur() {
        setIsInputFocused(false);
    }

    return (
        <div className={`${styles.tags} ${isInputFocused ? styles.inputFocused : ''}`}>
            <div className={styles.inputBox}>
                <input
                    onKeyDown={handleKeyDown}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={styles.input}
                    required
                />
                <label>Tags</label>
            </div>
            {tags.map((tag, index) => (
                <div className={styles.tagsItens} key={index}>
                    <span className={styles.text}>{tag}</span>
                    <span className={styles.close} onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
        </div>
    );
}
