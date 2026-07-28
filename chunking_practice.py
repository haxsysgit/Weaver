from langchain_text_splitters import RecursiveCharacterTextSplitter, TokenTextSplitter                                                                                                                               
from pathlib import Path                                                                                                                                                                 

def recursive_chunker(doc: str, chunk_size: int = 1000, chunk_overlap: int = 50, strategy: str = "recursive") -> list[str]:                                                                                                                                                                                     
    doc_path = Path(doc)
    with open(doc_path) as f:                                                                                                                                                                
        text = f.read()  # just read it, don't json.load()                                                                                                                                   

    if strategy == "recursive":                                                                                                        
        # Configure the splitter
        splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
            length_function=len,
            separators=["\n\n", "\n", ". ", " ", ""]
        )
        chunks = splitter.split_text(text)
        return chunks

    elif strategy == "token":
        splitter = TokenTextSplitter(
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
        )
        chunks = splitter.split_text(text)
        return chunks
    else:
        raise ValueError(f"Unknown strategy: {strategy}. Choose from 'recursive' or 'token'.")
    

# Example usage
chp1to100 = []
for i in range(1, 101):
    chp = recursive_chunker(f"novels/shadow-slave/0001-0100/chapter-{i:04d}.txt", chunk_size=512, chunk_overlap=50, strategy="token")
    chp1to100.append(chp)



average_chunks = max(len(chunks) for chunks in chp1to100)
print(f"Average number of chunks per chapter: {average_chunks}")
print(chp1to100[0][1])  # Print the chunks of the first chapter for inspection