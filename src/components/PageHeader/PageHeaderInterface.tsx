export interface PageHeaderInterface
{
    value?: string;
    OnChange?(event: React.ChangeEvent<HTMLInputElement>):void;
}

export default PageHeaderInterface;