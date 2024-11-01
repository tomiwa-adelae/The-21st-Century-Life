import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";

export const Modal = ({ isOpen, onClose, children }: any) => {
	if (!isOpen) return null;
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
			<style jsx>{`
				.modal-overlay {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: rgba(0, 0, 0, 0.7);
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 1000;
				}
				.modal-content {
					position: relative;
					background: white;
					padding: 20px;
					border-radius: 8px;
					max-width: 90%;
					max-height: 80%;
					overflow: auto;
				}
				.modal-close {
					position: absolute;
					top: 10px;
					right: 10px;
					background: none;
					border: none;
					font-size: 24px;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};
