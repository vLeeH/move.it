import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../style/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Close modal"/>
                </button>
            </div>
        </div>
    )
}
